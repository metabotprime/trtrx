import type { GetStaticPaths, GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import { ArticleCard, CategoryNavigation, ReviewNotice, TopicIntro } from '@/components/blog/ArticleParts';
import { getPopulatedBlogCategories, getBlogPostsByCategory, summarizeBlogPost, type BlogCategory, type BlogPostSummary } from '@/content/blog';
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS } from '@/content/blog-metadata';

type Props = { category: BlogCategory; posts: BlogPostSummary[]; categories: BlogCategory[] };
export default function BlogCategoryPage({ category, posts, categories }: Props) {
  const title = `TRT ${CATEGORY_LABELS[category]} guides`;
  const path = `/blog/category/${category}`;
  return <>
    <SEOHead title={title} description={CATEGORY_DESCRIPTIONS[category]} path={path} ogImage={`/api/og?title=${encodeURIComponent(title)}`} />
    <EntityGraphSchema title={title} description={CATEGORY_DESCRIPTIONS[category]} url={path} pageType="CollectionPage" />
    <PageShell>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'TRT guides', href: '/blog' }, { name: CATEGORY_LABELS[category], href: path }]} />
      <section className="container py-12 md:py-16"><p className="eyebrow">TRT guides</p><h1 className="mt-5 font-serif text-display-lg font-medium text-primary">{CATEGORY_LABELS[category]}</h1><TopicIntro category={category} /><div className="mt-7 max-w-3xl"><ReviewNotice /></div><div className="mt-8"><CategoryNavigation current={category} categories={categories} /></div><ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <li key={post.slug}><ArticleCard post={post} /></li>)}</ul></section>
      <FooterCTABand headline="Know what comes" italic="next." caption="TRTrx is preparing to launch. Patient intake is not open yet." />
    </PageShell>
  </>;
}
export const getStaticPaths: GetStaticPaths = async () => ({ paths: getPopulatedBlogCategories().map((category) => ({ params: { category } })), fallback: false });
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const category = String(params?.category ?? '') as BlogCategory;
  if (!getPopulatedBlogCategories().includes(category)) return { notFound: true };
  return { props: { category, posts: getBlogPostsByCategory()[category].map(summarizeBlogPost), categories: getPopulatedBlogCategories() }, revalidate: 86400 };
};
