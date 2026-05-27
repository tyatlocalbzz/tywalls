import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article" };

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <article className="mx-auto max-w-[68rem] px-6 pt-12 pb-24">
      <div className="max-w-[42rem] mx-auto">
        <div className="text-xs uppercase tracking-[1px] text-[#6b665c] mb-3">
          {new Date(article.date).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </div>

        <h1 className="tracking-[-0.015em] mb-8">{article.title}</h1>

        <div className="prose">
          <MDXRemote source={article.content} components={components} />
        </div>

        <div className="mt-16 pt-8 border-t border-[#d9d2c6]">
          <a
            href="/contact"
            className="inline-flex items-center text-[14px] font-medium text-[#1a2f4a] hover:text-[#14253a]"
          >
            If this resonates, we should talk →
          </a>
        </div>
      </div>
    </article>
  );
}
