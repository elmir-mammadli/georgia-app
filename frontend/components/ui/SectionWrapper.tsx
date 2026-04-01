import { cn } from "@/lib/utils";
import { Container } from "./Container";
import type { SectionConfig, SectionTheme } from "@/types/strapi";

const themeStyles: Record<SectionTheme, { bg: string; text: "light" | "dark" }> = {
  white: { bg: "bg-white", text: "dark" },
  light: {
    bg: "bg-[linear-gradient(180deg,#EBFFF6_0%,#f5fff9_55%,#ffffff_100%)]",
    text: "dark",
  },
  mint: {
    bg: "bg-[linear-gradient(135deg,#EBFFF6_0%,#e0fff0_45%,rgba(150,186,253,0.14)_100%)]",
    text: "dark",
  },
  primary: {
    bg: "bg-[linear-gradient(135deg,#004D43_0%,#193133_42%,#0d5c52_72%,#21EBA7_100%)]",
    text: "light",
  },
};

interface SectionWrapperProps {
  config?: SectionConfig;
  defaultTheme?: SectionTheme;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  config,
  defaultTheme = "white",
  children,
  className,
  containerClassName,
}: SectionWrapperProps) {
  const theme = config?.theme ?? defaultTheme;
  const { bg } = themeStyles[theme];

  return (
    <section
      id={config?.sectionId || undefined}
      className={cn("py-16 sm:py-24", bg, className)}
    >
      <Container className={cn("relative", containerClassName)}>{children}</Container>
    </section>
  );
}

export function useThemeText(config?: SectionConfig, defaultTheme?: SectionTheme): boolean {
  const theme = config?.theme ?? defaultTheme ?? "white";
  return themeStyles[theme].text === "light";
}
