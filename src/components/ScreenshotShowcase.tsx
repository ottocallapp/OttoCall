"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { IMAGES } from "@/lib/images";

const SCREENSHOTS = [
  {
    src: IMAGES.classList,
    alt: "Class list dashboard",
    caption: "Your classes at a glance",
  },
  {
    src: IMAGES.classDetail,
    alt: "Class detail page",
    caption: "Class detail and session start",
  },
  {
    src: IMAGES.liveSession,
    alt: "Live session screen",
    caption: "Live session: call and mark participation",
  },
  {
    src: IMAGES.participationHistory,
    alt: "Participation history",
    caption: "Participation history and analytics",
  },
  {
    src: IMAGES.exportCsv,
    alt: "Export CSV modal",
    caption: "Export session logs or student summaries",
  },
];

export function ScreenshotShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shot = SCREENSHOTS[currentIndex];

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex((index + SCREENSHOTS.length) % SCREENSHOTS.length);
    },
    []
  );

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % SCREENSHOTS.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="screens" className="py-20 sm:py-28 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Built for the way you teach
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Clean, focused screens. No clutter, no learning curve.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {SCREENSHOTS.map((s) => (
                <div
                  key={s.alt}
                  className="w-full min-w-full flex flex-col items-center"
                >
                  <div className="w-full max-w-sm mx-auto px-2">
                    <div className="rounded-lg overflow-hidden border border-border-subtle shadow-card bg-background">
                      <Image
                        src={s.src}
                        alt={s.alt}
                        width={400}
                        height={700}
                        className="w-full h-auto object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous screenshot"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-subtle bg-background text-foreground hover:bg-muted transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {SCREENSHOTS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to screenshot ${index + 1}`}
                  aria-current={index === currentIndex}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-emerald-600"
                      : "w-2 bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next screenshot"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-subtle bg-background text-foreground hover:bg-muted transition-colors"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-foreground">{shot.caption}</p>
            <p className="mt-1 text-muted-foreground text-sm">{shot.alt}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
