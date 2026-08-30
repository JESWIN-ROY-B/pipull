import { useEffect, useRef, useState } from "react";
import { Check, HelpCircle, MapPin, Menu, Search, ShoppingCart, X } from "lucide-react";
import { PipullLogo } from "./Logo";
import { CITIES } from "@/lib/pipull-data";
import { useCart } from "@/lib/cart";

type Props = {
  query: string;
  onQueryChange: (q: string) => void;
  city: string;
  onCityChange: (c: string) => void;
  onLogin: () => void;
};

const NAV_LINKS = ["Native Devices", "Pipull for Business", "Help"];

export function Header({ query, onQueryChange, city, onCityChange, onLogin }: Props) {
  const [locationOpen, setLocationOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const { count, setDrawerOpen } = useCart();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <PipullLogo />

        {/* Location selector */}
        <div className="relative hidden md:block" ref={locationRef}>
          <button
            type="button"
            onClick={() => setLocationOpen((o) => !o)}
            className="flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <MapPin className="size-4 text-brand" />
            <span className="max-w-[9rem] truncate">{city || "Select City / Location"}</span>
          </button>
          {locationOpen && (
            <div className="absolute left-0 top-12 w-60 overflow-hidden rounded-2xl border border-border bg-popover p-1.5 shadow-lift">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Popular cities
              </p>
              {CITIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    onCityChange(c);
                    setLocationOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  {c}
                  {c === city && <Check className="size-4 text-brand" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search */}
        <div className="relative hidden flex-1 lg:block">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search for 'AC Repair', 'Salon at Home', 'Cleaning'..."
            aria-label="Search services"
            className="h-11 w-full rounded-xl border border-border bg-surface pl-11 pr-16 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:border-brand focus:bg-background focus:ring-2 focus:ring-brand/20"
          />
          {query ? (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          ) : (
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-border bg-background px-2 py-0.5 font-sans text-xs text-muted-foreground">
              /
            </kbd>
          )}
        </div>

        <div className="ml-auto flex items-center gap-1 lg:ml-0">
          <nav className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href="#services"
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label={`Cart with ${count} items`}
            className="relative rounded-xl border border-border p-2.5 text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingCart className="size-[18px]" />
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-brand-foreground">
                {count}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={onLogin}
            className="hidden rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:block"
          >
            Login / Sign Up
          </button>

          <button
            type="button"
            onClick={() => setMobileNavOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-xl border border-border p-2.5 text-foreground xl:hidden"
          >
            {mobileNavOpen ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
          </button>
        </div>
      </div>

      {/* Mobile search row */}
      <div className="border-t border-border px-4 py-2.5 lg:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search 'AC Repair', 'Salon at Home'..."
            aria-label="Search services"
            className="h-11 w-full rounded-xl border border-border bg-surface pl-10 pr-3 text-sm outline-none placeholder:text-muted-foreground focus:border-brand focus:bg-background"
          />
        </div>
      </div>

      {mobileNavOpen && (
        <div className="border-t border-border bg-background px-4 py-3 xl:hidden">
          <div className="mb-2 flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => onCityChange(c)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  c === city
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border text-muted-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href="#services"
              onClick={() => setMobileNavOpen(false)}
              className="block rounded-lg px-2 py-2.5 text-sm font-medium text-foreground"
            >
              {l}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileNavOpen(false);
              onLogin();
            }}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <HelpCircle className="size-4" /> Login / Sign Up
          </button>
        </div>
      )}
    </header>
  );
}
