import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  heading,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-balance text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]",
          light ? "text-white" : "text-text-primary"
        )}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8",
            align === "center" && "mx-auto",
            light ? "text-white/80" : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
