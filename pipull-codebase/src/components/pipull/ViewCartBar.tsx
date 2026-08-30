import { ShoppingCart } from "lucide-react";
import { money, useCart } from "@/lib/cart";

export function ViewCartBar() {
  const { count, itemTotal, drawerOpen, setDrawerOpen } = useCart();
  const visible = count > 0 && !drawerOpen;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 px-4 pb-4 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 rounded-2xl border border-border bg-primary px-5 py-3.5 shadow-lift">
        <div className="text-primary-foreground">
          <p className="text-sm font-bold">
            {count} {count === 1 ? "service" : "services"} added
          </p>
          <p className="text-xs opacity-75">Item total {money(itemTotal)}</p>
        </div>
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-brand-foreground transition-opacity hover:opacity-90"
        >
          <ShoppingCart className="size-4" /> View Cart
        </button>
      </div>
    </div>
  );
}
