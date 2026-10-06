import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import { ArticleCard, CategoryNavigation, PublicationNotice } from '@/components/blog/ArticleParts';
import { getPublicBlogPosts, getFeaturedBlogPosts, getPublicBlogCategories, summarizeBlogPost, type BlogPostSummary, type BlogCategory } from '@/content/blog';
import { CLINICAL_CONTENT_RELEASED } from '@/content/launch';

type Props = { posts: BlogPostSummary[]; featured: BlogPostSummary[]; categories: BlogCategory[] };
const title = CLINICAL_CONTENT_RELEASED ? 'TRT guides: testing, treatment, safety, and cost' : 'TRT costs and care planning';
const description = CLINICAL_CONTENT_RELEASED ? 'Understand testosterone testing, treatment decisions, fertility, monitoring, and the questions to ask before choosing care. Sources and review status are visible.' : 'Compare written estimates, included services, billing periods, and cancellation terms. Clinical guidance is awaiting review; patient intake is not open.';

export default function BlogIndexPage({ posts, featured, categories }: Props) {
  return <>
    <SEOHead title={title} description={description} path="/blog" ogImage={`/api/og?title=${encodeURIComponent('TRT guides')}`} />
    <EntityGraphSchema title={title} description={description} url="/blog" pageType="CollectionPage" />
    <PageShell>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'TRT guides', href: '/blog' }]} />
      <section className="bg-surface">
        <div className="container py-12 md:py-16">
          <p className="eyebrow">TRTrx resources</p>
          <h1 className="mt-5 max-w-3xl font-serif text-display-lg font-medium text-primary">{CLINICAL_CONTENT_RELEASED ? 'Understand TRT.' : 'Understand the costs.'}<br /><span className="display-italic">Ask better questions.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{CLINICAL_CONTENT_RELEASED ? 'Guides to testing, treatment choices, safety, fertility, and cost. Start with the question that brought you here.' : 'A practical resource for comparing estimates and understanding the services behind an advertised price.'}</p>
          {!CLINICAL_CONTENT_RELEASED ? <div className="mt-8 max-w-3xl"><PublicationNotice /></div> : null}
          <div className="mt-8"><CategoryNavigation categories={categories} /></div>
        </div>
      </section>
      {featured.length > 1 ? <section className="bg-surface-alt" aria-labelledby="start-here">
        <div className="container py-12">
          <h2 id="start-here" className="font-serif text-3xl text-primary">Start here</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">New to testosterone care? These guides explain the evaluation and practical decisions before treatment.</p>
          <ul className="mt-7 grid gap-5 md:grid-cols-3">{featured.map((post) => <li key={post.slug}><ArticleCard post={post} headingLevel={3} /></li>)}</ul>
        </div>
      </section> : null}
      <section className="bg-surface" aria-labelledby="all-articles">
        <div className="container py-12 md:py-16">
          <h2 id="all-articles" className="font-serif text-3xl text-primary">Explore the library</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">Published articles include their sources. Our <Link href="/editorial-policy" className="text-primary underline underline-offset-4">editorial policy</Link> explains how updates and review credits work.</p>
          <ul className={`mt-7 grid gap-5 ${posts.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-2xl'}`}>{posts.map((post) => <li key={post.slug}><ArticleCard post={post} headingLevel={3} /></li>)}</ul>
        </div>
      </section>
      <FooterCTABand headline="Know what comes" italic="next." caption="TRTrx is preparing to launch. Patient intake is not open yet." />
    </PageShell>
  </>;
}
export const getStaticProps: GetStaticProps<Props> = async () => ({ props: { posts: getPublicBlogPosts().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).map(summarizeBlogPost), featured: getFeaturedBlogPosts().slice(0, 3).map(summarizeBlogPost), categories: getPublicBlogCategories() }, revalidate: 3600 });
