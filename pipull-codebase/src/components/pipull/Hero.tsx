import { ShieldCheck, Star, Users } from "lucide-react";
import { CATEGORIES } from "@/lib/pipull-data";
import { CategoryIcon } from "./CategoryIcon";

export function Hero({ city }: { city: string }) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:px-8 lg:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="size-3.5 text-brand" />
            Now serving {city}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
            Professional services at your doorstep.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Book trusted, trained professionals for all your home needs.
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <div>
              <dt className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Star className="size-4 fill-brand text-brand" /> Service rating
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">4.8</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="size-4 text-brand" /> Customers served
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">12M+</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <ShieldCheck className="size-4 text-brand" /> Verified pros
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">48K</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft sm:p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            What are you looking for?
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CATEGORIES.map((c) => (
              <a
                key={c.id}
                href="#services"
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card"
              >
                <span
                  className={`flex size-12 items-center justify-center rounded-xl ${c.tint} text-foreground transition-colors group-hover:text-brand`}
                >
                  <CategoryIcon id={c.id} className="size-7" />
                </span>
                <span className="text-sm font-semibold leading-snug text-foreground">
                  {c.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
