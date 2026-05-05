import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getHomepageBlogPosts, CATEGORY_LABELS } from '@/content/blog';
import { SectionHeader } from './SectionHeader';

export function HomeBlogSection() {
  const posts = getHomepageBlogPosts();
  if (posts.length === 0) return null;

  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Resources"
          title="Read up on *TRT.*"
          subtitle="Plain-English explainers from physicians who specialize in men's hormone health."
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-200 hover:-translate-y-px hover:border-accent/40 hover:shadow-md md:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-tracked text-accent">
                  {CATEGORY_LABELS[post.category]}
                </p>

                <h3
                  className="mt-4 font-serif text-[22px] font-medium leading-tight text-primary md:text-2xl"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {post.title}
                </h3>

                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                    {post.readMinutes} min read
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-primary transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-accent"
          >
            View all articles
            <ArrowRight
              size={14}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
