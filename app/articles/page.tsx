import { getAllArticles } from "@/lib/mdx";
import Link from "next/link";

export const metadata = {
  title: "Articles",
  description: "Thoughts on interviews, trust, and the quiet work that actually moves a business forward.",
};

export default function Articles() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-[68rem] px-6 pt-12 pb-20">
      <div className="max-w-[42rem]">
        <div className="uppercase tracking-[1px] text-xs text-[#6b665c] mb-2">Writing</div>
        <h1 className="tracking-[-0.015em]">Articles</h1>
        <p className="mt-4 text-[15.5px] text-[#4a463f] max-w-[38ch]">
          Short, direct pieces on what surfaces when you stop guessing and start listening.
        </p>
      </div>

      <div className="mt-12 max-w-[42rem]">
        {articles.length > 0 ? (
          articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="article-card group block"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-4 gap-y-1">
                <div className="font-medium group-hover:text-[#1a2f4a] transition-colors text-[15.5px]">
                  {article.title}
                </div>
                <div className="text-[#6b665c] text-sm sm:ml-auto tabular-nums">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
              <p className="mt-2 text-[15px] text-[#4a463f] leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          ))
        ) : (
          <p className="text-[#6b665c]">Articles coming soon.</p>
        )}
      </div>
    </div>
  );
}
