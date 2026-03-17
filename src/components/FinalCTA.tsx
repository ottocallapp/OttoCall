import Link from "next/link";
import { PLAY_STORE_URL } from "@/lib/config";

export function FinalCTA() {
  return (
    <section id="download" className="py-20 sm:py-28 bg-emerald-600">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready for fairer participation?
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Download OttoCall on Android and start tracking participation today.
        </p>
        <div className="mt-10">
          <Link
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-emerald-600 px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-emerald-600 hover:border-emerald-600 transition-colors shadow-soft"
          >
            <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.674 6.801 8.372-9.103zm3.199-3.198l2.807 1.837a1 1 0 010 1.73l-2.808 1.838-2.302-2.302 2.302-2.303zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            Get it on Google Play
          </Link>
        </div>
      </div>
    </section>
  );
}
