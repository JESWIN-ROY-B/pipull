import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { PROMOS } from "@/lib/pipull-data";

export function Promos() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="bg-surface py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Offers for you
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Limited-time savings across Pipull services.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous offers"
              className="rounded-xl border border-border bg-background p-2.5 text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next offers"
              className="rounded-xl border border-border bg-background p-2.5 text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1"
        >
          {PROMOS.map((p) => (
            <article
              key={p.id}
              className={`flex min-w-[85%] snap-start flex-col justify-between rounded-2xl border border-border ${p.tint} p-5 sm:min-w-[320px]`}
            >
              <div>
                <span className="inline-flex rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold tracking-wide text-primary-foreground">
                  {p.badge}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
              <a
                href="#services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
              >
                {p.cta} <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
