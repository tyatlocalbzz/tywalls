import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Editorial, minimal prose styles inside articles
    h1: ({ children }) => (
      <h1 className="text-[clamp(1.9rem,1.6rem+1.4vw,2.35rem)] tracking-[-0.015em] mb-6 mt-2 font-semibold">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[1.35rem] tracking-[-0.01em] mt-10 mb-4 font-semibold text-[#11110e]">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="text-[15.5px] leading-[1.68] text-[#4a463f] mb-6">
        {children}
      </p>
    ),
    em: ({ children }) => (
      <em className="font-medium text-[#1a2f4a] not-italic font-serif">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-[#11110e]">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="pl-6 border-l-2 border-[#1a2f4a] my-8 text-[15px] text-[#4a463f] italic font-serif tracking-[-0.005em]">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-[#1a2f4a] underline decoration-[#d9d2c6] underline-offset-2 hover:decoration-[#1a2f4a]">
        {children}
      </a>
    ),
    ...components,
  };
}
