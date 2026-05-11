import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { BlogPostingSchema } from '@/components/seo/schemas/BlogPostingSchema';
import { MedicalWebPageSchema } from '@/components/seo/schemas/MedicalWebPageSchema';
import { SpeakableSchema } from '@/components/seo/schemas/SpeakableSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
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

type Props = { post: BlogPost };

export default function BlogPostPage({ post }: Props) {
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
      />
      <OrganizationSchema />
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
              <p className="font-mono text-[11px] uppercase tracking-tracked text-accent">
                {CATEGORY_LABELS[post.category]}
              </p>
              <h1
                className="mt-4 font-serif text-display-lg font-medium leading-[1.05] text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {post.title}
              </h1>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-tracked text-muted">
                <span>
                  Last updated{' '}
                  {new Date(post.lastReviewedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
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
                      Last reviewed:{' '}
                      {new Date(post.lastReviewedAt).toLocaleDateString(
                        'en-US',
                        { month: 'long', day: 'numeric', year: 'numeric' },
                      )}
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
              <p className="eyebrow mb-8 text-center">Keep Reading</p>
              <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-px hover:border-accent/40"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-tracked text-accent">
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
  return { props: { post }, revalidate: 86400 };
};
