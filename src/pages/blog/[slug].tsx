import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { BlogPostingSchema } from '@/components/seo/schemas/BlogPostingSchema';
import { MedicalWebPageSchema } from '@/components/seo/schemas/MedicalWebPageSchema';
import { SpeakableSchema } from '@/components/seo/schemas/SpeakableSchema';
import { CitationSchema, type Citation } from '@/components/seo/schemas/CitationSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { isNoindexBlogSlug } from '@/lib/seo/noindex-slugs';
import { QuickAnswerBox } from '@/components/blog/QuickAnswerBox';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import { toAbsoluteUrl } from '@/lib/seo/site';
import {
  BLOG_POSTS,
  CATEGORY_LABELS,
  getBlogPostBySlug,
  getAuthor,
  getReviewer,
  getRelatedBlogPosts,
  type BlogPost,
} from '@/content/blog';

/**
 * Contextual links from each article into the relevant treatment / money
 * pages — flows topical authority from content to commercial pages and
 * keeps articles from being a dead end.
 */
const RELATED_LINKS: Record<string, { label: string; href: string }[]> = {
  'cypionate-vs-enanthate': [
    { label: 'Testosterone Cypionate', href: '/treatments/cypionate' },
    { label: 'Testosterone Enanthate', href: '/treatments/enanthate' },
  ],
  'trt-and-fertility': [
    { label: 'Enclomiphene', href: '/treatments/enclomiphene' },
    { label: 'HCG therapy', href: '/treatments/hcg' },
  ],
  'trt-and-hematocrit': [
    { label: 'Testosterone Cypionate', href: '/treatments/cypionate' },
    { label: 'Safety & monitoring FAQ', href: '/faq' },
  ],
  'signs-of-low-testosterone-35-55': [
    { label: 'Compare treatments', href: '/treatments' },
    { label: 'How it works', href: '/how-it-works' },
  ],
  'how-trt-pricing-works': [
    { label: 'See pricing', href: '/pricing' },
    { label: 'Compare treatments', href: '/treatments' },
  ],
  'weekly-vs-twice-weekly-cypionate': [
    { label: 'Testosterone Cypionate', href: '/treatments/cypionate' },
    { label: 'How it works', href: '/how-it-works' },
  ],
};

type Props = {
  post: BlogPost;
  /** Pre-formatted on the server so SSR/CSR don't diverge and hydrate-mismatch. */
  lastReviewedDisplay: string;
};

export default function BlogPostPage({ post, lastReviewedDisplay }: Props) {
  const author = getAuthor(post.authorId);
  const reviewer = getReviewer(post.reviewerId);
  const related = getRelatedBlogPosts(post.slug, 4);

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        ogImage={post.ogImage ?? '/og/blog-default.png'}
        noindex={isNoindexBlogSlug(post.slug)}
      />
      <EntityGraphSchema
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        pageType="MedicalWebPage"
      />
      <BlogPostingSchema post={post} />
      <MedicalWebPageSchema
        name={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        lastReviewed={post.lastReviewedAt}
        reviewedBy={
          reviewer
            ? {
                name: reviewer.name,
                jobTitle: reviewer.title,
                honorificSuffix: reviewer.credentials,
              }
            : undefined
        }
      />
      <SpeakableSchema
        name={post.title}
        url={toAbsoluteUrl(`/blog/${post.slug}`)}
        speakableSelectors={['.speakable-answer']}
      />
      {post.citations && post.citations.length > 0 && (
        <CitationSchema
          pageUrl={`/blog/${post.slug}`}
          citations={post.citations.map<Citation>((c) => ({
            '@type': c.type,
            headline: c.headline,
            ...(c.author ? { author: c.author } : {}),
            ...(c.datePublished ? { datePublished: c.datePublished } : {}),
            ...(c.url ? { url: c.url } : {}),
            ...(c.publisher ? { publisher: { name: c.publisher } } : {}),
            ...(c.publicationType ? { publicationType: c.publicationType } : {}),
          }))}
        />
      )}

      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        <article className="bg-surface">
          <div className="container max-w-3xl px-5 py-12 md:py-16">
            {/* Header */}
            <header>
              <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
                {CATEGORY_LABELS[post.category]}
              </p>
              <h1
                className="mt-4 font-serif text-display-lg font-medium leading-[1.05] text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {post.title}
              </h1>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-tracked text-muted">
                <span>Last updated {lastReviewedDisplay}</span>
                <span aria-hidden>·</span>
                <span>{post.readMinutes} min read</span>
                {reviewer && (
                  <>
                    <span aria-hidden>·</span>
                    <span>
                      Reviewed by {reviewer.name}, {reviewer.credentials}
                    </span>
                  </>
                )}
              </p>
            </header>

            <QuickAnswerBox answer={post.quickAnswer} />

            {/* Body */}
            <div className="prose mt-10 max-w-none text-[16px] leading-[1.7] text-text [&>p]:mt-5 [&>p:first-child]:mt-0 [&>h2]:mt-12 [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:font-medium [&>h2]:leading-tight [&>h2]:text-primary [&>h3]:mt-8 [&>h3]:font-serif [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-primary md:text-[17px]">
              {/* For now, render body as paragraphs split on \n\n. Real MDX comes later. */}
              {post.body.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Contextual links into treatment / commercial pages */}
            {RELATED_LINKS[post.slug] && (
              <div className="mt-12 rounded-2xl border border-border bg-surface-alt p-6 md:p-7">
                <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
                  Explore on trtrx
                </p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {RELATED_LINKS[post.slug]!.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-accent/40 hover:text-accent-strong"
                      >
                        {l.label}
                        <ArrowRight
                          size={13}
                          className="transition-transform duration-150 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Author + reviewer block */}
            {(author || reviewer) && (
              <div className="mt-16 grid gap-8 rounded-2xl border border-border bg-surface-alt p-7 md:grid-cols-2 md:p-8">
                {author && (
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                      Written by
                    </p>
                    <p
                      className="mt-2 font-serif text-lg font-medium text-primary"
                      style={{ fontVariationSettings: "'opsz' 144" }}
                    >
                      {author.name}
                      {author.credentials ? `, ${author.credentials}` : ''}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-tracked text-muted">
                      {author.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text">
                      {author.bio}
                    </p>
                  </div>
                )}
                {reviewer && (
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                      Reviewed by
                    </p>
                    <p
                      className="mt-2 font-serif text-lg font-medium text-primary"
                      style={{ fontVariationSettings: "'opsz' 144" }}
                    >
                      {reviewer.name}, {reviewer.credentials}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-tracked text-muted">
                      {reviewer.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text">
                      Last reviewed: {lastReviewedDisplay}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="bg-surface-alt">
            <div className="container py-16 md:py-20">
              <h2 className="eyebrow mb-8 text-center">Keep Reading</h2>
              <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-px hover:border-accent/40"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-tracked text-accent-strong">
                        {CATEGORY_LABELS[p.category]}
                      </p>
                      <h3
                        className="mt-3 font-serif text-base font-medium leading-tight text-primary"
                        style={{ fontVariationSettings: "'opsz' 144" }}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-auto pt-4 font-mono text-[10px] uppercase tracking-tracked text-muted">
                        {p.readMinutes} min read
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <FooterCTABand
          headline="The standard"
          italic="for TRT."
          caption="Free shipping · 60-day guarantee · Cancel anytime"
        />
      </PageShell>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: BLOG_POSTS.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getBlogPostBySlug(slug);
  if (!post) return { notFound: true };
  const lastReviewedDisplay = new Date(post.lastReviewedAt).toLocaleDateString(
    'en-US',
    { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' },
  );
  return { props: { post, lastReviewedDisplay }, revalidate: 86400 };
};
