import { PipullLogo } from "./Logo";

const COLUMNS = [
  { title: "Company", links: ["About us", "Careers", "Pipull for Business"] },
  { title: "Services", links: ["Cleaning", "Appliance repair", "Salon at home"] },
  { title: "Support", links: ["Help centre", "Cancellation policy", "Contact"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <PipullLogo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Hyper-local home services delivered by verified, trained professionals.
            </p>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#services" className="text-sm text-muted-foreground hover:text-brand">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pipull. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
