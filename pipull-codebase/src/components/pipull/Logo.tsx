export function PipullLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="9" className="fill-primary" />
        {/* stylised 'P' stem */}
        <path
          d="M11 23V9.5h6.2a4.4 4.4 0 0 1 0 8.8H11"
          stroke="currentColor"
          className="text-primary-foreground"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* interconnected nodes + upward connection arrow */}
        <circle cx="11" cy="23" r="2.6" className="fill-brand" />
        <circle cx="21.5" cy="13.9" r="2.6" className="fill-brand" />
        <path
          d="M23.5 12.2h2.6v2.6"
          stroke="currentColor"
          className="text-brand"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
        Pipull
      </span>
    </div>
  );
}
