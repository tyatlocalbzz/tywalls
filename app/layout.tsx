import type { Metadata } from "next";
import { Playfair_Display, Spectral, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const displaySerif = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bodySerif = Spectral({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tywalls.com"),
  title: {
    default: "Ty Walls",
    template: "%s — Ty Walls",
  },
  description:
    "I interview business owners, their teams, and their customers. The truths that surface change how you grow.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ty Walls",
    description:
      "I interview business owners, their teams, and their customers. The truths that surface change how you grow.",
    images: [{ url: "/og-image.jpg" }],
  },
};

// Lightweight Person schema for SEO / AI understanding
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ty Walls",
  url: "https://tywalls.com",
  jobTitle: "Interviewer for business owners",
  description:
    "I interview business owners, their teams, and their customers. The truths that surface change how you grow.",
  email: "ty@tywalls.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displaySerif.variable} ${bodySerif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f4ede3] text-[#141310] font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* Minimal, honest nav */}
        <nav className="sticky top-0 z-50 bg-[#f7f4ed]/95 backdrop-blur border-b border-[#d9d2c6]">
          <div className="mx-auto max-w-[68rem] px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-medium tracking-[-0.01em] text-[15px]">
              Ty Walls
            </Link>
            <div className="flex items-center gap-8 text-[14px] text-[#4a463f]">
              <Link href="/articles" className="hover:text-[#11110e] transition-colors">
                Articles
              </Link>
              <Link href="/contact" className="hover:text-[#11110e] transition-colors">
                Contact
              </Link>
              <Link
                href="/contact"
                className="hidden sm:inline-block px-4 py-1.5 rounded-full bg-[#1a2f4a] text-[#f7f4ed] text-[13px] font-medium hover:bg-[#14253a] transition-colors"
              >
                Talk to Ty
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        {/* Quiet footer — transparent, no noise */}
        <footer className="border-t border-[#d9d2c6] mt-20">
          <div className="mx-auto max-w-[68rem] px-6 py-12 flex flex-col sm:flex-row gap-y-4 sm:items-center justify-between text-[13px]">
            <div className="space-x-4">
              <span>Ty Walls</span>
              <span className="text-[#d9d2c6]">·</span>
              <a href="mailto:ty@tywalls.com" className="hover:text-[#11110e]">ty@tywalls.com</a>
            </div>
            <div className="text-[#6b665c]">
              Interviews for business owners who value the truth.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
