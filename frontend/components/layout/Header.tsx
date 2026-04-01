import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Why It Matters", href: "#stats" },
  { label: "Solution", href: "#features" },
  { label: "How It Works", href: "#steps" },
  { label: "Cases", href: "#case-studies" },
  { label: "FAQs", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#21EBA7]/15 bg-[linear-gradient(180deg,#004D43_0%,#193133_100%)] py-2 text-white shadow-[0_2px_20px_rgba(25,49,51,0.25)]">
      <Container className="max-w-7xl">
        <div className="flex h-14 items-center justify-between gap-8 lg:h-[3.7rem]">
          <Link href="/" className="flex items-center">
            <Image
              src="https://framerusercontent.com/images/mQtr7X0538fRyuCGJZNIMIJNlXs.png?width=401&height=119"
              alt="Georgia"
              width={401}
              height={119}
              priority
              className="h-10 w-auto sm:h-11"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 xl:gap-9 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              href="#contact"
              size="sm"
              className="bg-[#D0FF73] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#004D43] shadow-[0_10px_18px_rgba(0,0,0,0.15)] hover:-translate-y-px hover:bg-[#dcff9a] hover:text-[#004D43] hover:shadow-[0_12px_22px_rgba(0,0,0,0.2)]"
            >
              Book Demo
            </Button>
          </div>

          <MobileNav links={navLinks} />
        </div>
      </Container>
    </header>
  );
}
