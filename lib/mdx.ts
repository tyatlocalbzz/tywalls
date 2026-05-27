import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) return [];

  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "2026-01-01",
        excerpt: data.excerpt || "",
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "2026-01-01",
    excerpt: data.excerpt || "",
    content,
  };
}
