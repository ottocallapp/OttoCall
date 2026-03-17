"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "@/lib/images";
import { PLAY_STORE_URL } from "@/lib/config";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#screens", label: "Screens" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={IMAGES.logo}
              alt="OttoCall"
              width={180}
              height={48}
              className="h-10 sm:h-12 w-auto transition-opacity group-hover:opacity-90"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-soft"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.674 6.801 8.372-9.103zm3.199-3.198l2.807 1.837a1 1 0 010 1.73l-2.808 1.838-2.302-2.302 2.302-2.303zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Download on Android
            </Link>

            <button
              type="button"
              className="md:hidden p-2.5 rounded-lg text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-subtle animate-fade-in">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted hover:text-emerald-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.674 6.801 8.372-9.103zm3.199-3.198l2.807 1.837a1 1 0 010 1.73l-2.808 1.838-2.302-2.302 2.302-2.303zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Download on Android
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
