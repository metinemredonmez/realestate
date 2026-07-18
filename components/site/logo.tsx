import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={cn("size-10", className)}
    >
      <path
        d="M24 3 42 13.5v21L24 45 6 34.5v-21L24 3Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 3v18m0 0L6 13.5M24 21l18-7.5M24 45V27m0 0 9-3.75M24 27l-9-3.75"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15 23.25v7.5l9 5.25 9-5.25v-7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <a href="#top" className={cn("flex items-center gap-3", className)}>
      <LogoMark className="text-gold" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-[0.08em]",
            dark ? "text-white" : "text-navy-900"
          )}
        >
          EFENDİOĞLU
        </span>
        <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.5em] text-gold">
          GROUP
        </span>
      </span>
    </a>
  );
}
