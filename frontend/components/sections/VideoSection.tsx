import { SectionWrapper, useThemeText } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { VideoSectionData } from "@/types/strapi";

type VideoSectionProps = Omit<VideoSectionData, "__component">;

function getEmbedUrl(url: string): string | null {
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\s?]+)/
  );
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  return null;
}

export function VideoSection({
  sectionConfig,
  heading,
  subtitle,
  videoUrl,
}: VideoSectionProps) {
  const isLight = useThemeText(sectionConfig, "primary");
  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <SectionWrapper config={sectionConfig} defaultTheme="primary">
      <SectionHeading
        heading={heading}
        subtitle={subtitle}
        light={isLight}
        className="mx-auto max-w-3xl"
      />

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08] p-3 shadow-[0_8px_40px_rgba(150,186,253,0.12),0_30px_80px_rgba(0,77,67,0.28)] ring-1 ring-[#96BAFD]/25 backdrop-blur-sm sm:p-4">
        <div className="relative aspect-video overflow-hidden rounded-[1.6rem] ring-1 ring-[#21EBA7]/20">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#004D43_0%,#193133_38%,#21EBA7_72%,#96BAFD_100%)]">
              <p className="text-sm text-white/60">Video unavailable</p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
