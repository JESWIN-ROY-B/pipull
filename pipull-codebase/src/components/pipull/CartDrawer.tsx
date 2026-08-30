import { useState } from "react";
import { Minus, Plus, ShieldCheck, ShoppingBag, Trash2, X } from "lucide-react";
import { money, useCart } from "@/lib/cart";
import { toast } from "sonner";

const DAYS = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return {
    key: d.toISOString().slice(0, 10),
    weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
    day: d.getDate(),
    month: d.toLocaleDateString("en-US", { month: "short" }),
  };
});

const SLOTS = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"];

export function CartDrawer() {
  const {
    items,
    count,
    itemTotal,
    taxes,
    serviceFee,
    plusSavings,
    total,
    isPlus,
    togglePlus,
    increment,
    decrement,
    remove,
    clear,
    drawerOpen,
    setDrawerOpen,
  } = useCart();

  const [day, setDay] = useState(DAYS[0]!.key);
  const [slot, setSlot] = useState(SLOTS[1]!);


  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-foreground/40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-label="Your cart"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-background shadow-lift transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-display text-lg font-bold text-foreground">
            Your cart {count > 0 && <span className="text-muted-foreground">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close cart"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="size-10 text-muted-foreground" />
            <p className="mt-4 font-display text-lg font-bold text-foreground">
              Your cart is empty
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Add a service to see pricing and available slots.
            </p>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="mt-6 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Browse services
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
              {/* Items */}
              <ul className="space-y-3">
                {items.map((i) => (
                  <li
                    key={i.id}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">{i.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {i.duration} • {money(i.price)} each
                      </p>
                      <div className="mt-2.5 flex items-center gap-3">
                        <div className="flex items-center gap-1 rounded-lg border border-border">
                          <button
                            type="button"
                            onClick={() => decrement(i.id)}
                            aria-label="Decrease quantity"
                            className="p-1.5 text-foreground transition-colors hover:bg-secondary"
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="min-w-6 text-center text-sm font-bold">{i.qty}</span>
                          <button
                            type="button"
                            onClick={() => increment(i.id)}
                            aria-label="Increase quantity"
                            className="p-1.5 text-foreground transition-colors hover:bg-secondary"
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(i.id)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="size-3.5" /> Remove
                        </button>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-foreground">
                      {money(i.price * i.qty)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Plus */}
              <button
                type="button"
                onClick={togglePlus}
                className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition-colors ${
                  isPlus ? "border-brand bg-brand/5" : "border-border bg-surface"
                }`}
              >
                <ShieldCheck className={`size-5 ${isPlus ? "text-brand" : "text-muted-foreground"}`} />
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-foreground">
                    Pipull Plus Membership
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Save 15% on every order
                  </span>
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                    isPlus
                      ? "bg-brand text-brand-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {isPlus ? "Added" : "Add"}
                </span>
              </button>

              {/* Date strip */}
              <div>
                <h3 className="text-sm font-semibold text-foreground">Select a date</h3>
                <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
                  {DAYS.map((d) => (
                    <button
                      key={d.key}
                      type="button"
                      onClick={() => setDay(d.key)}
                      className={`flex min-w-16 flex-col items-center rounded-xl border px-3 py-2.5 transition-colors ${
                        day === d.key
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-foreground hover:bg-secondary"
                      }`}
                    >
                      <span className="text-[11px] font-medium opacity-80">{d.weekday}</span>
                      <span className="font-display text-lg font-bold leading-tight">{d.day}</span>
                      <span className="text-[11px] opacity-80">{d.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slots */}
              <div>
                <h3 className="text-sm font-semibold text-foreground">Select a time slot</h3>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {SLOTS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSlot(s)}
                      className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition-colors ${
                        slot === s
                          ? "border-brand bg-brand/10 text-brand"
                          : "border-border bg-card text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Breakdown */}
              <div className="rounded-2xl border border-border bg-surface p-4">
                <h3 className="text-sm font-semibold text-foreground">Payment summary</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <dt>Item total</dt>
                    <dd className="text-foreground">{money(itemTotal)}</dd>
                  </div>
                  {plusSavings > 0 && (
                    <div className="flex justify-between text-brand">
                      <dt>Pipull Plus savings</dt>
                      <dd>-{money(plusSavings)}</dd>
                    </div>
                  )}
                  <div className="flex justify-between text-muted-foreground">
                    <dt>Taxes (8%)</dt>
                    <dd className="text-foreground">{money(taxes)}</dd>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <dt>Service fee</dt>
                    <dd className="text-foreground">{money(serviceFee)}</dd>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2.5 font-display text-base font-bold text-foreground">
                    <dt>Total</dt>
                    <dd>{money(total)}</dd>
                  </div>
                </dl>
              </div>

              <button
                type="button"
                onClick={clear}
                className="text-xs font-medium text-muted-foreground hover:text-destructive"
              >
                Clear cart
              </button>
            </div>

            <footer className="border-t border-border p-4">
              <button
                type="button"
                onClick={() => {
                  toast.success("Booking confirmed", {
                    description: `${slot} on ${new Date(day).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })} • ${money(total)}`,
                  });
                  setDrawerOpen(false);
                }}
                className="w-full rounded-xl bg-primary px-5 py-3.5 font-display text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Proceed to Pay · {money(total)}
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
