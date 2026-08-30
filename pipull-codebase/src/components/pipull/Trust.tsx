import { BadgeCheck, ReceiptText, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    icon: BadgeCheck,
    title: "Verified Professionals",
    copy: "Every Pipull pro is background checked, skill-tested and rated after each job.",
    tint: "bg-tint-blue",
  },
  {
    icon: ReceiptText,
    title: "Transparent Pricing",
    copy: "Upfront quotes before the professional arrives. No hidden costs, ever.",
    tint: "bg-tint-mint",
  },
  {
    icon: ShieldCheck,
    title: "Pipull Guarantee",
    copy: "Not happy with the service? We re-do it free of charge within 30 days.",
    tint: "bg-tint-amber",
  },
];

export function Trust() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Why 12 million homes trust Pipull
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, copy, tint }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className={`flex size-12 items-center justify-center rounded-xl ${tint}`}>
                <Icon className="size-6 text-brand" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
