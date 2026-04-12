"use client";

import { useState } from "react";

interface VideoPlayerProps {
  url: string;
  poster?: string;
}

export function VideoPlayer({ url, poster }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const isYoutube = url.includes("youtube.com") || url.includes("youtu.be");
  const isVimeo = url.includes("vimeo.com");

  function getEmbedUrl(): string {
    if (isYoutube) {
      const id = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\s]+)/
      )?.[1];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (isVimeo) {
      const id = url.match(/vimeo\.com\/(\d+)/)?.[1];
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return url;
  }

  if (isPlaying && (isYoutube || isVimeo)) {
    return (
      <div className="relative aspect-video">
        <iframe
          src={getEmbedUrl()}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-[1.75rem]"
      aria-label="Play video"
    >
      {poster && (
        <img
          src={poster}
          alt="Video thumbnail"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      )}
      {!poster && (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b6e4f_0%,#156f55_40%,#d9ff7f_100%)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
        <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white/50 bg-white/90 shadow-[0_14px_40px_rgba(16,24,40,0.2)] transition-transform group-hover:scale-110">
          <svg
            className="ml-1 h-6 w-6 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
