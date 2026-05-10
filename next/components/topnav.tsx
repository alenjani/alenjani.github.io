"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { href: "/detection", label: "Inspection" },
  { href: "/twins", label: "Digital twins" },
  { href: "/recsys", label: "Recsys" },
  { href: "/#about", label: "About" },
];

export function Topnav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto max-w-[1100px] px-8 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold text-[15.5px] tracking-tight">
          Ali Lenjani<span className="text-accent">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[14px] text-muted">
          {NAV_ITEMS.map((item) => {
            const active = item.href.startsWith("/#") ? false : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-ink",
                  active && "text-ink font-medium",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="text-[13px] font-semibold px-3 py-1.5 rounded-md bg-ink text-bg hover:opacity-90 transition-opacity"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
