import { useMemo, useState } from "react";
import { Check, Clock, Plus, Minus, SearchX, Star } from "lucide-react";
import { SERVICES, TABS, type Service } from "@/lib/pipull-data";
import { money, useCart } from "@/lib/cart";
import { CategoryIcon } from "./CategoryIcon";

const iconFor: Record<Service["tab"], string> = {
  popular: "trades",
  cleaning: "cleaning",
  appliance: "ac-repair",
  beauty: "womens-salon",
};

function ServiceCard({ service }: { service: Service }) {
  const { add, increment, decrement, qtyOf } = useCart();
  const qty = qtyOf(service.id);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-card">
      <div
        className={`relative flex h-36 items-center justify-center ${service.tint} border-b border-border`}
      >
        <CategoryIcon id={iconFor[service.tab]} className="size-14 text-foreground/70" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-background/90 px-2 py-1 text-xs font-semibold text-foreground shadow-soft">
          <Star className="size-3.5 fill-brand text-brand" />
          {service.rating} ({service.reviews} reviews)
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-bold text-foreground">{service.title}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="size-4" />
          {service.duration} • <span className="font-semibold text-foreground">{money(service.price)}</span>
        </p>

        <ul className="mt-3 space-y-1.5">
          {service.includes.map((inc) => (
            <li key={inc} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-brand" />
              {inc}
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-1">
          {qty === 0 ? (
            <button
              type="button"
              onClick={() => add(service)}
              className="w-full rounded-xl border border-brand bg-brand/5 px-4 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              + Add
            </button>
          ) : (
            <div className="flex items-center justify-between rounded-xl border border-brand bg-brand px-2 py-1.5 text-brand-foreground">
              <button
                type="button"
                onClick={() => decrement(service.id)}
                aria-label={`Remove one ${service.title}`}
                className="rounded-lg p-1.5 transition-colors hover:bg-brand-foreground/15"
              >
                <Minus className="size-4" />
              </button>
              <span className="text-sm font-bold">{qty} in cart</span>
              <button
                type="button"
                onClick={() => increment(service.id)}
                aria-label={`Add one ${service.title}`}
                className="rounded-lg p-1.5 transition-colors hover:bg-brand-foreground/15"
              >
                <Plus className="size-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function FeaturedServices({ query }: { query: string }) {
  const [tab, setTab] = useState<Service["tab"]>("popular");
  const searching = query.trim().length > 0;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q) {
      return SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.tab.includes(q) ||
          s.includes.some((i) => i.toLowerCase().includes(q)),
      );
    }
    return SERVICES.filter((s) => s.tab === tab);
  }, [query, tab]);

  return (
    <section id="services" className="scroll-mt-24 bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          {searching ? `Results for “${query}”` : "Featured services"}
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {searching
            ? `${results.length} service${results.length === 1 ? "" : "s"} matched your search.`
            : "Book in under a minute. Pay only after the job is done."}
        </p>

        {!searching && (
          <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto border-b border-border pb-px">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`-mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
                  tab === t.id
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}

        {results.length === 0 ? (
          <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface p-12 text-center">
            <SearchX className="size-8 text-muted-foreground" />
            <p className="mt-3 font-display text-lg font-bold text-foreground">No services found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try “AC”, “cleaning”, “massage” or “haircut”.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
