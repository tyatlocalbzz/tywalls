import Button from "@/components/Button";
import { getAllArticles } from "@/lib/mdx";

export default function Home() {
  return (
    <div className="mx-auto max-w-[68rem] px-6 pt-10 pb-20">
      {/* Opening — feels like the first page of a notebook */}
      <section className="max-w-[48rem] mb-14">
        <div className="flex items-center gap-5 mb-10">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-[6px] border-[#3f342d] flex-shrink-0">
            <img 
              src="/images/portrait.jpg" 
              alt="Ty Walls" 
              className="object-cover w-full h-full" 
            />
          </div>
          <div className="mono text-[13px] tracking-[1.5px] text-[#6b665c] uppercase">Ty Walls • Field Notes</div>
        </div>

        <h1 className="leading-none tracking-[-0.03em] mb-6">
          They say your network is your net worth.<br />
          I help you grow your network.
        </h1>

        <p className="text-[17px] text-[#4a463f] max-w-[42ch]">
          I keep a recorder running through client work, long drives, and time with my kids. 
          The parts worth keeping almost never happen on purpose.
        </p>
      </section>

      {/* The actual method */}
      <section className="max-w-[48rem] mb-14 space-y-5 text-[16px] leading-relaxed text-[#4a463f]">
        <p>
          Most owners already have the language that makes the right people choose them. 
          They just haven’t written it down where anyone else can find it.
        </p>
        <p>
          I pull it out of the recordings — theirs, their team’s, their customers’ — and make it visible. 
          No performance. No invented brand voice. Just what was already true when the tape was rolling.
        </p>
        <p className="font-medium text-[#141310]">
          One hour a month from you. I handle the rest.
        </p>
      </section>

      <div className="h-px bg-[#c9b8a0] my-10" />

      {/* Notes pulled from real recordings */}
      <section className="mb-14">
        <div className="flex items-end justify-between mb-5">
          <div>
            <div className="mono text-xs tracking-[2px] text-[#6b665c] mb-1">TAPES • 2026</div>
            <h2 className="text-[22px] tracking-tight">Recent pulls</h2>
          </div>
          <Button href="/articles" variant="ghost" className="text-sm !py-1.5 !px-5">
            All notes →
          </Button>
        </div>

        <div className="space-y-0 max-w-[48rem]">
          {getAllArticles().slice(0, 3).map((article) => (
            <a 
              key={article.slug} 
              href={`/articles/${article.slug}`} 
              className="article-card group block"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-4 gap-y-1">
                <div className="font-medium group-hover:text-[#8B3A2A] transition-colors">
                  {article.title}
                </div>
                <div className="mono text-xs text-[#6b665c] sm:ml-auto tracking-widest">
                  {new Date(article.date).toLocaleDateString("en-US", { month: "short", year: "numeric" }).toUpperCase()}
                </div>
              </div>
              <p className="mt-2 text-[#4a463f] text-[15px] leading-relaxed">
                {article.excerpt}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Straight CTA */}
      <section className="max-w-[48rem]">
        <p className="text-[17px] leading-snug mb-5">
          If the people who already choose you are the reason you’re still in business, we should talk.
        </p>
        <Button href="/contact" variant="primary">
          Talk to Ty
        </Button>
        <p className="mt-3 mono text-xs tracking-widest text-[#6b665c]">
          20 MINUTES • NO PITCH • I’LL TELL YOU STRAIGHT
        </p>
      </section>
    </div>
  );
}
