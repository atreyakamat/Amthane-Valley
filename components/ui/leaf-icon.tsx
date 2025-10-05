import { cn } from "@/lib/utils";

interface LeafIconProps {
  className?: string;
}

export function LeafIcon({ className }: LeafIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-12 w-12 text-forest", className)}
      role="img"
      aria-hidden="true"
    >
      <path
        d="M8 28C10.5 13 22 4 38 6C51 7.8 60 18 60 32C60 46 48 58 32 58C16 58 6 45 8 28Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 14C26.5 25 32.5 40 48 46"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
