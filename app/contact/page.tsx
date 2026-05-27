import Button from "@/components/Button";

export const metadata = {
  title: "Contact",
  description: "A short conversation. No pitch. I’ll tell you honestly whether this work fits what you’re trying to do.",
};

export default function Contact() {
  // In production, set PUBLIC_CAL_URL in Vercel (e.g. https://cal.com/tywalls/20min)
  const calUrl = process.env.PUBLIC_CAL_URL || "https://cal.com";

  return (
    <div className="mx-auto max-w-[68rem] px-6 pt-12 pb-20">
      <div className="max-w-[42rem]">
        <div className="uppercase tracking-[1px] text-xs text-[#6b665c] mb-2">Next step</div>
        <h1 className="tracking-[-0.015em]">Let’s talk.</h1>

        <div className="mt-6 space-y-6 text-[15.5px] leading-relaxed text-[#4a463f]">
          <p>
            Twenty minutes. No slides, no pitch. I’ll ask a few questions about your business and tell you, plainly, whether the way I work would be useful to you right now.
          </p>
          <p>
            If it’s not a fit, I’ll say so and point you toward what might actually help. If it is, we’ll find a time to start.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button href={calUrl} variant="primary" external>
            Book a 20-minute call
          </Button>
          <Button href="mailto:ty@tywalls.com" variant="ghost" external>
            Email me instead
          </Button>
        </div>

        <p className="mt-3 text-xs text-[#6b665c]">
          Free. No commitment. I usually reply within one business day.
        </p>

        {/* Simple, honest contact form (mailto fallback for v1) */}
        <div className="mt-16 pt-10 border-t border-[#d9d2c6]">
          <p className="text-sm uppercase tracking-[1px] text-[#6b665c] mb-4">Or send a note</p>

          <form
            action="mailto:ty@tywalls.com"
            method="POST"
            encType="text/plain"
            className="space-y-4 max-w-md"
          >
            <div>
              <label htmlFor="name" className="block text-xs tracking-wide uppercase mb-1.5 text-[#6b665c]">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-transparent border border-[#d9d2c6] px-4 py-3 text-[15px] placeholder:text-[#9a9285] focus:outline-none focus:border-[#1a2f4a]"
                placeholder="Alex Rivera"
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-xs tracking-wide uppercase mb-1.5 text-[#6b665c]">
                Business
              </label>
              <input
                id="business"
                name="business"
                type="text"
                required
                className="w-full bg-transparent border border-[#d9d2c6] px-4 py-3 text-[15px] placeholder:text-[#9a9285] focus:outline-none focus:border-[#1a2f4a]"
                placeholder="Rivera Manufacturing"
              />
            </div>
            <div>
              <label htmlFor="note" className="block text-xs tracking-wide uppercase mb-1.5 text-[#6b665c]">
                What prompted you to reach out?
              </label>
              <textarea
                id="note"
                name="note"
                rows={4}
                required
                className="w-full bg-transparent border border-[#d9d2c6] px-4 py-3 text-[15px] placeholder:text-[#9a9285] focus:outline-none focus:border-[#1a2f4a] resize-y"
                placeholder="I keep hearing the same language from my top three customers and I’ve never written it down..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-ghost w-full sm:w-auto mt-2"
            >
              Send note
            </button>
          </form>

          <p className="mt-4 text-xs text-[#6b665c]">
            This form opens your email client. I read every one.
          </p>
        </div>
      </div>
    </div>
  );
}
