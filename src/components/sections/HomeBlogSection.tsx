import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogPostSummary } from '@/content/blog';
import { CATEGORY_LABELS } from '@/content/blog-metadata';
import { SectionHeader } from './SectionHeader';

export function HomeBlogSection({ posts }: { posts: BlogPostSummary[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-surface-alt" aria-label="TRT guides">
      <div className="container max-w-6xl py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
          <SectionHeader
            eyebrow="TRTrx blog"
            title="Read up on *TRT.*"
            subtitle="Explore our published guides and the sources behind them."
            align="left"
            size="md"
            className="mx-0"
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary underline underline-offset-4"
          >
            Explore all articles
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-8 flex flex-wrap gap-4">
          {posts.map((post) => (
            <li key={post.slug} className="min-w-0 flex-1 basis-64">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full items-center justify-between gap-5 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-6"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
                    {CATEGORY_LABELS[post.category]}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-medium leading-tight text-primary sm:text-2xl">
                    {post.title}
                  </h3>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-primary group-hover:text-accent-strong"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
