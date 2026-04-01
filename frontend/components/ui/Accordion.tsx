"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "space-y-3 rounded-[1.75rem] border border-[#004D43]/8 bg-white/80 p-3 shadow-[0_14px_40px_rgba(0,77,67,0.06)] backdrop-blur-sm sm:p-4",
        className
      )}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-2xl border transition-all duration-300",
              isOpen
                ? "border-[#004D43]/12 bg-white shadow-sm ring-1 ring-[#96BAFD]/12"
                : "border-transparent bg-white/60 hover:border-[#21EBA7]/15 hover:bg-white"
            )}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="pr-4 text-base font-semibold leading-7 text-text-primary sm:text-lg">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-180 border-transparent bg-[#004D43] text-white"
                    : "border-[#004D43]/12 bg-bg-light text-[#004D43]"
                )}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-sm leading-7 text-text-secondary sm:px-6 sm:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
