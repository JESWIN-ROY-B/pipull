type Props = { id: string; className?: string };

export function CategoryIcon({ id, className = "size-8" }: Props) {
  const common = {
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (id) {
    case "womens-salon":
      return (
        <svg {...common}>
          <path d="M16 4c-4.4 0-7 3.4-7 7.5 0 4.6 2.4 6.9 2.4 10.5" />
          <path d="M20.6 22c0-3.6 2.4-5.9 2.4-10.5" />
          <path d="M11.4 22h9.2l1.4 6H10z" />
          <circle cx="16" cy="12" r="1.4" />
        </svg>
      );
    case "mens-salon":
      return (
        <svg {...common}>
          <circle cx="11" cy="9" r="3.2" />
          <circle cx="11" cy="23" r="3.2" />
          <path d="M13.6 11.2 27 21M13.6 20.8 27 11" />
        </svg>
      );
    case "ac-repair":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="24" height="10" rx="3" />
          <path d="M8 12h16" />
          <path d="M10 20v2M16 20v4M22 20v2" />
        </svg>
      );
    case "cleaning":
      return (
        <svg {...common}>
          <path d="M13 4h6l1 12h-8z" />
          <path d="M11 16h10l1.5 12h-13z" />
          <path d="M16 20v4" />
        </svg>
      );
    case "trades":
      return (
        <svg {...common}>
          <path d="M20 4a6 6 0 0 0-5.2 9L5 22.8A2.7 2.7 0 0 0 8.8 26.6L18.6 17A6 6 0 0 0 26 8.6l-3.4 3.4-3.2-3.2L22.8 5A6 6 0 0 0 20 4Z" />
        </svg>
      );
    case "painting":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="7" rx="2" />
          <path d="M20 8.5h5a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2h-8" />
          <rect x="13" y="17" width="6" height="10" rx="2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="11" />
        </svg>
      );
  }
}
