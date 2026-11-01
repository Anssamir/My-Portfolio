'use client';

import { useEffect, type RefObject } from 'react';

/**
 * Adds the subtle depth change to the sticky work cards.
 *
 * The cards themselves are stacked with CSS `position: sticky` and per-card
 * top offsets. This hook only tracks which card is currently on top and
 * exposes a depth value per card, so the cards behind scale down a touch as
 * each new one settles over them.
 */
export function useWorkStack<T extends HTMLElement>(stackRef: RefObject<T | null>) {
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const cards = Array.from(stack.querySelectorAll<HTMLElement>('[data-work-card]'));
    if (cards.length < 2) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let stackTop = 0;
    let stackOffset = 0;
    let frame = 0;
    let lastActive = -2;

    const readMetrics = () => {
      const styles = getComputedStyle(stack);
      stackTop = parseFloat(styles.getPropertyValue('--stack-top')) || 0;
      stackOffset = parseFloat(styles.getPropertyValue('--stack-offset')) || 0;
    };

    const update = () => {
      frame = 0;

      let active = -1;
      for (let i = 0; i < cards.length; i += 1) {
        const stickyTop = stackTop + i * stackOffset;
        if (cards[i].getBoundingClientRect().top <= stickyTop + 1) {
          active = i;
        }
      }

      if (active === lastActive) return;
      lastActive = active;

      cards.forEach((card, i) => {
        const depth = active > i ? active - i : 0;
        card.style.setProperty('--stack-depth', String(depth));
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      readMetrics();
      schedule();
    };

    readMetrics();
    update();

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
      if (frame) cancelAnimationFrame(frame);
      cards.forEach((card) => card.style.removeProperty('--stack-depth'));
    };
  }, [stackRef]);
}
