import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold tracking-[-0.01em] transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-[#004D43] text-white shadow-[0_10px_30px_rgba(0,77,67,0.25)] hover:-translate-y-0.5 hover:bg-[#003a33] hover:shadow-[0_16px_36px_rgba(0,77,67,0.32)] hover:ring-2 hover:ring-[#21EBA7]/35 focus:ring-[#004D43] active:translate-y-0 active:shadow-[0_6px_20px_rgba(0,77,67,0.2)]",
    secondary:
      "bg-secondary text-bg-dark shadow-[0_10px_24px_rgba(208,255,115,0.25)] hover:-translate-y-0.5 hover:bg-secondary-light focus:ring-secondary active:translate-y-0",
    outline:
      "border border-primary/20 bg-white/85 text-primary shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-primary/35 hover:bg-white hover:text-primary-dark focus:ring-primary active:translate-y-0",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-8 py-4 text-base sm:text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
