import { SectionWrapper, useThemeText } from "@/components/ui/SectionWrapper";
import type { StatsBannerData } from "@/types/strapi";

type StatsBannerProps = Omit<StatsBannerData, "__component">;

function DecorativeArrow({ light }: { light: boolean }) {
  const stroke = light ? "url(#stats-arrow-on-dark)" : "url(#stats-arrow-on-light)";

  return (
    <svg
      width="188"
      height="88"
      viewBox="0 0 188 88"
      fill="none"
      className="mt-8 hidden lg:block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="stats-arrow-on-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D0FF73" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#21EBA7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#96BAFD" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="stats-arrow-on-light" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#004D43" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#96BAFD" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M 0 3.155 C 0.423 4.637 1.772 6.025 2.584 7.318 C 4.714 10.713 7.43 13.689 9.889 16.841 C 12.905 20.704 15.676 24.981 19.619 28.007 C 20.463 28.655 21.346 29.089 21.549 27.976 C 21.719 27.036 22.849 26.04 23.447 25.359 C 25.528 22.991 27.349 20.416 29.461 18.07 C 33.789 13.26 38.228 8.529 42.492 3.666 C 43.195 2.863 44.909 0.273 46.081 0.012 C 46.516 -0.084 46.655 0.404 46.862 0.698 C 48.448 2.955 49.861 5.246 51.584 7.43 C 61.623 20.16 71.552 33.365 83.038 44.852 C 84.81 46.624 86.679 48.308 88.509 50.02 C 88.785 50.279 89.828 51.36 90.279 51.36 C 90.514 51.36 91.205 50.655 91.364 50.531 C 93.037 49.221 94.683 47.896 96.181 46.383 C 103.074 39.424 109.403 31.809 115.991 24.562 C 120.966 19.089 125.92 13.61 130.474 7.781 C 131.154 6.911 132.19 4.408 132.931 6.313 C 134.066 9.234 136.162 11.931 137.732 14.624 C 141.51 21.108 144.947 27.782 148.674 34.292 C 153.971 43.544 159.728 52.631 166.873 60.58 C 167.989 61.821 169.794 63.103 170.542 64.6"
        stroke={stroke}
        strokeWidth="4.23"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        fill="transparent"
        transform="translate(2.735 2.735)"
      />
      <path
        d="M 0 24.118 C -0.001 24.118 1.749 25.163 2.201 25.426 C 6.644 28.009 11.631 29.679 16.349 31.663 C 19.025 32.789 21.806 33.73 24.404 35.029 C 25.23 35.442 26.127 36.303 26.127 35.029 C 26.127 32.808 25.738 30.635 25.553 28.425 C 25.075 22.716 24.734 16.947 23.766 11.294 C 23.127 7.557 23.019 3.597 21.821 0"
        stroke={stroke}
        strokeWidth="4.23"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        fill="transparent"
        transform="translate(159.5 49.5)"
      />
    </svg>
  );
}

export function StatsBanner({
  sectionConfig,
  heading,
  subtitle,
  stats,
}: StatsBannerProps) {
  const isLight = useThemeText(sectionConfig, "primary");

  return (
    <SectionWrapper config={sectionConfig} defaultTheme="primary">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <h2
            className={`text-balance text-3xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] ${
              isLight ? "text-white" : "text-text-primary"
            }`}
          >
            {heading}
          </h2>
          {subtitle && (
            <p
              className={`mt-5 max-w-md text-base leading-7 sm:text-lg sm:leading-8 ${
                isLight ? "text-white/70" : "text-text-secondary"
              }`}
            >
              {subtitle}
            </p>
          )}
          <DecorativeArrow light={isLight} />
        </div>

        {stats && stats.length > 0 && (
          <div className="flex flex-col gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.id}
                className={`group relative rounded-2xl px-7 py-6 transition-all duration-300 hover:-translate-y-0.5 ${
                  isLight
                    ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_100%)] shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-md hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_100%)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.22)]"
                    : "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
                } ${isLight ? "border border-white/10 ring-1 ring-[#96BAFD]/10" : "border border-[#004D43]/8"}`}
                style={{
                  animation: `fade-slide-up 0.5s ease-out ${i * 150}ms both`,
                }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`shrink-0 text-4xl font-extrabold tracking-[-0.04em] sm:text-[2.75rem] ${
                      isLight ? "text-[#D0FF73]" : "text-primary"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="min-w-0 pt-1">
                    <div
                      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                        isLight ? "text-white/90" : "text-text-primary"
                      }`}
                    >
                      {stat.label}
                    </div>
                    {stat.description && (
                      <p
                        className={`mt-1.5 text-sm leading-relaxed ${
                          isLight ? "text-white/55" : "text-text-secondary"
                        }`}
                      >
                        {stat.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
