import Image from 'next/image';
import Link from 'next/link';
import { posts, type Post } from '@/data/posts';

interface BlogSectionProps {
  showCta?: boolean;
  linkCards?: boolean;
}

function BlogCard({ post, linkCards }: { post: Post; linkCards: boolean }) {
  const content = (
    <>
      <div className="blog-card-media">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="blog-card-content">
        <time className="blog-date" dateTime={post.dateTime}>
          {post.date}
        </time>
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
      </div>
    </>
  );

  if (!linkCards) {
    return (
      <article className="blog-card">
        {content}
      </article>
    );
  }

  return (
    <Link href="/blog" className="blog-card">
      {content}
    </Link>
  );
}

export function BlogSection({ showCta = true, linkCards = true }: BlogSectionProps) {
  return (
    <section id="blog" className="section blog">
      <div className="eyebrow">Blogs</div>
      <h2>My brightest thoughts</h2>
      <div className="blog-grid reveal">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} linkCards={linkCards} />
        ))}
      </div>
      {showCta && (
        <div className="blog-cta">
          <Link href="/blog" className="about-work-btn">
            View all blogs
          </Link>
        </div>
      )}
    </section>
  );
}
