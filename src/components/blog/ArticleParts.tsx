import Link from 'next/link';
import { CATEGORY_DESCRIPTIONS, CATEGORY_LABELS } from '@/content/blog-metadata';
import type { BlogCategory, BlogPost, BlogPostSummary } from '@/content/blog';

export function ReviewNotice() {
  return (
    <aside className="rounded-xl border border-border bg-surface-alt px-5 py-4 text-sm leading-relaxed text-muted" aria-label="Article review status">
      <p className="font-medium text-primary">Clinical review not yet completed</p>
      <p className="mt-1">This is source-based editorial content prepared before launch. It is not individualized medical advice. See our <Link href="/medical-review-policy" className="underline underline-offset-4">medical review policy</Link>.</p>
    </aside>
  );
}

export function CategoryNavigation({ current, categories }: { current?: BlogCategory; categories: BlogCategory[] }) {
  return (
    <nav aria-label="Article topics" className="flex flex-wrap gap-2">
      <Link href="/blog" aria-current={!current ? 'page' : undefined} className={`rounded-full border px-4 py-2 text-sm ${!current ? 'border-primary bg-primary text-white' : 'border-border text-primary hover:bg-surface-alt'}`}>All articles</Link>
      {categories.map((category) => (
        <Link key={category} href={`/blog/category/${category}`} aria-current={current === category ? 'page' : undefined} className={`rounded-full border px-4 py-2 text-sm ${current === category ? 'border-primary bg-primary text-white' : 'border-border text-primary hover:bg-surface-alt'}`}>
          {CATEGORY_LABELS[category]}
        </Link>
      ))}
    </nav>
  );
}

export function ArticleCard({ post, headingLevel = 2 }: { post: BlogPostSummary; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 md:p-7">
      <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">{CATEGORY_LABELS[post.category]}</p>
      <Heading className="mt-4 font-serif text-2xl font-medium leading-tight text-primary">{post.title}</Heading>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <p className="mt-5 text-sm text-primary">{post.readMinutes} min read <span aria-hidden="true" className="ml-2">→</span></p>
    </Link>
  );
}

export function ArticleBody({ post }: { post: BlogPost }) {
  return (
    <div className="space-y-10">
      {post.sections.map((section) => (
        <section key={section.id} aria-labelledby={section.id}>
          <h2 id={section.id} className="scroll-mt-28 font-serif text-2xl font-medium leading-tight text-primary md:text-3xl">{section.title}</h2>
          {section.paragraphs.map((paragraph, index) => <p key={index} className="mt-5 text-base leading-relaxed text-muted md:text-lg">{paragraph}</p>)}
          {section.bullets ? <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-relaxed text-muted">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          {section.table ? (
            <div className="mt-6 overflow-x-auto rounded-xl border border-border" role="region" aria-label={`${section.title} comparison table`} tabIndex={0}>
              <table className="w-full min-w-[360px] border-collapse text-left text-sm leading-relaxed">
                <thead className="bg-surface-alt text-primary"><tr>{section.table.columns.map((column) => <th key={column} scope="col" className="px-4 py-3 font-medium">{column}</th>)}</tr></thead>
                <tbody className="text-muted">{section.table.rows.map((row, index) => <tr key={index} className="border-t border-border">{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row" className="px-4 py-3 font-medium text-primary">{cell}</th> : <td key={cellIndex} className="px-4 py-3">{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
          ) : null}
          {section.sourceIds?.length ? (
            <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
              <span>Sources:</span>
              {section.sourceIds.map((id) => {
                const index = post.citations.findIndex((source) => source.id === id);
                const source = post.citations[index];
                return source ? <a key={id} href={`#source-${id}`} className="underline underline-offset-4">[{index + 1}] {source.publisher}</a> : null;
              })}
            </p>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function TopicIntro({ category }: { category: BlogCategory }) {
  return <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{CATEGORY_DESCRIPTIONS[category]}</p>;
}
