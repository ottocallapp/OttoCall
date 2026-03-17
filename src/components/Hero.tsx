import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { PLAY_STORE_URL } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 text-sm font-medium mb-6">
              For teachers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Fair participation,
              <br />
              <span className="text-emerald-600">without the friction.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A smarter way to call on students. OttoCall helps you track
              classroom participation with confidence. Live sessions, clear
              history, and reports you can export.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity shadow-soft"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.674 6.801 8.372-9.103zm3.199-3.198l2.807 1.837a1 1 0 010 1.73l-2.808 1.838-2.302-2.302 2.302-2.303zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Download on Android
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-border-subtle bg-background px-8 py-4 text-base font-semibold text-foreground hover:bg-muted transition-colors"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative lg:pl-8 flex justify-center order-first lg:order-last">
            <div className="relative max-w-[320px] mx-auto">
              <div className="rounded-xl overflow-hidden border border-border-subtle shadow-card bg-background">
                <Image
                  src={IMAGES.liveSession}
                  alt="Live session: call on students and mark participation"
                  width={400}
                  height={700}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
