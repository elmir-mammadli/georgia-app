import Image from "next/image";
import { cn } from "@/lib/utils";
import { getStrapiMedia } from "@/lib/utils";
import type { StrapiImage } from "@/types/strapi";

interface CardProps {
  title: string;
  description: string;
  image?: StrapiImage;
  icon?: StrapiImage;
  tag?: string;
  className?: string;
}

export function Card({
  title,
  description,
  image,
  icon,
  tag,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-[1.75rem] border border-[#004D43]/8 bg-white shadow-[0_12px_35px_rgba(0,77,67,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,77,67,0.1)]",
        className
      )}
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={getStrapiMedia(image.url)}
            alt={image.alternativeText || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-70" />
          {tag && (
            <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
              {tag}
            </span>
          )}
        </div>
      )}
      <div className="p-6 sm:p-7">
        {icon && (
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#004D43]/8 bg-[linear-gradient(180deg,#f2fff9_0%,#e0f9ed_100%)] shadow-inner">
            <Image
              src={getStrapiMedia(icon.url)}
              alt={icon.alternativeText || ""}
              width={28}
              height={28}
            />
          </div>
        )}
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-text-primary sm:text-[1.35rem]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
