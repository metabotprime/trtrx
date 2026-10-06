import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { BlogPostingSchema } from '@/components/seo/schemas/BlogPostingSchema';
import { MedicalWebPageSchema } from '@/components/seo/schemas/MedicalWebPageSchema';
import { CitationSchema } from '@/components/seo/schemas/CitationSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import { ArticleBody, ArticleCard, ReviewNotice } from '@/components/blog/ArticleParts';
import { QuickAnswerBox } from '@/components/blog/QuickAnswerBox';
import { isNoindexBlogSlug } from '@/lib/seo/noindex-slugs';
import { BLOG_POSTS, getBlogPostBySlug, getRelatedBlogPosts, summarizeBlogPost, type BlogPost, type BlogPostSummary } from '@/content/blog';
import { CATEGORY_LABELS, formatEditorialDate, getAuthor, getReviewer } from '@/content/blog-metadata';

type Props = { post: BlogPost; related: BlogPostSummary[] };
export default function BlogPostPage({ post, related }: Props) {
  const author = getAuthor(post.authorId);
  const reviewer = post.lastReviewedAt ? getReviewer(post.reviewerId) : undefined;
  const path = `/blog/${post.slug}`;
  return <>
    <SEOHead title={post.title} description={post.excerpt} path={path} ogImage={post.ogImage ?? `/api/og?title=${encodeURIComponent(post.title)}`} noindex={isNoindexBlogSlug(post.slug)} />
    <EntityGraphSchema title={post.title} description={post.excerpt} url={path} pageType="MedicalWebPage" />
    <BlogPostingSchema post={post} />
    <MedicalWebPageSchema name={post.title} description={post.excerpt} path={path} lastReviewed={reviewer ? post.lastReviewedAt : undefined} reviewedBy={reviewer ? { name: reviewer.name, jobTitle: reviewer.title, honorificSuffix: reviewer.credentials } : undefined} />
    <CitationSchema pageUrl={path} citations={post.citations.map((source) => ({ '@type': source.type, headline: source.headline, url: source.url, publisher: { name: source.publisher }, ...(source.author ? { author: source.author } : {}), ...(source.datePublished ? { datePublished: source.datePublished } : {}) }))} />
    <PageShell>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'TRT guides', href: '/blog' }, { name: CATEGORY_LABELS[post.category], href: `/blog/category/${post.category}` }, { name: post.title, href: path }]} />
      <article className="container max-w-4xl py-10 md:py-16">
        <header>
          <Link href={`/blog/category/${post.category}`} className="eyebrow underline-offset-4 hover:underline">{CATEGORY_LABELS[post.category]}</Link>
          <h1 className="mt-5 font-serif text-4xl font-medium leading-tight text-primary md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted"><span>By {author?.name ?? 'TRTrx Editorial Team'}</span><span>Editorial update <time dateTime={post.updatedAt}>{formatEditorialDate(post.updatedAt)}</time></span><span>{post.readMinutes} min read</span></p>
          <div className="mt-6">{reviewer && post.lastReviewedAt ? <p className="text-sm text-muted">Medically reviewed by {reviewer.name}, {reviewer.credentials}, on {formatEditorialDate(post.lastReviewedAt)}.</p> : <ReviewNotice />}</div>
        </header>
        <div className="my-8"><QuickAnswerBox answer={post.quickAnswer} /></div>
        <nav aria-label="On this page" className="mb-10 rounded-xl border border-border p-5 md:p-6">
          <h2 className="font-medium text-primary">On this page</h2>
          <ol className="mt-4 grid gap-3 text-sm sm:grid-cols-2">{post.sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-primary underline decoration-border underline-offset-4 hover:decoration-primary">{section.title}</a></li>)}<li><a href="#sources" className="text-primary underline decoration-border underline-offset-4 hover:decoration-primary">Sources and references</a></li></ol>
        </nav>
        <ArticleBody post={post} />
        <section aria-labelledby="sources" className="mt-12 border-t border-border pt-8">
          <h2 id="sources" className="scroll-mt-28 font-serif text-2xl text-primary">Sources and references</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">Sources checked for this editorial update on {formatEditorialDate(post.updatedAt)}. Older guidance may differ from newer agency statements. Product-specific decisions require the current label and clinical review.</p>
          <ol className="mt-5 list-decimal space-y-4 pl-5 text-sm leading-relaxed text-muted">{post.citations.map((source) => <li id={`source-${source.id}`} key={source.id} className="scroll-mt-28 pl-1"><a href={source.url} className="text-primary underline underline-offset-4">{source.headline}</a><span className="block">{source.publisher}</span></li>)}</ol>
        </section>
        <aside className="mt-10 rounded-xl border border-border bg-surface-alt p-5 text-sm leading-relaxed text-muted">
          <p className="font-medium text-primary">About this article</p><p className="mt-2">{author?.bio}</p><p className="mt-2"><Link href="/editorial-policy" className="underline underline-offset-4">Editorial policy</Link> · <Link href="/medical-review-policy" className="underline underline-offset-4">Medical review policy</Link></p>
        </aside>
        {post.relatedLinks.length ? <nav aria-label="Related TRTrx information" className="mt-8 flex flex-wrap gap-3">{post.relatedLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-border px-4 py-2 text-sm text-primary hover:bg-surface-alt">{link.label}</Link>)}</nav> : null}
      </article>
      <section className="bg-surface-alt" aria-labelledby="related-reading"><div className="container py-12"><h2 id="related-reading" className="font-serif text-3xl text-primary">Keep learning</h2><ul className="mt-7 grid gap-5 md:grid-cols-3">{related.map((entry) => <li key={entry.slug}><ArticleCard post={entry} headingLevel={3} /></li>)}</ul></div></section>
      <FooterCTABand headline="Know what comes" italic="next." caption="TRTrx is preparing to launch. Patient intake is not open yet." />
    </PageShell>
  </>;
}
export const getStaticPaths: GetStaticPaths = async () => ({ paths: BLOG_POSTS.map((post) => ({ params: { slug: post.slug } })), fallback: false });
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = getBlogPostBySlug(String(params?.slug ?? ''));
  if (!post) return { notFound: true };
  return { props: { post, related: getRelatedBlogPosts(post.slug).map(summarizeBlogPost) }, revalidate: 86400 };
};
