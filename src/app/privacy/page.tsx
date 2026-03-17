import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | OttoCall",
  description: "OttoCall privacy policy. How we handle your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <h1 className="mt-8 text-4xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-2 text-muted-foreground">
            Last updated: March 2025
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Overview</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                OttoCall is a classroom participation tracking app for teachers.
                This privacy policy explains how we collect, use, and protect
                your information when you use the OttoCall Android app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Data We Collect</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                OttoCall stores data locally on your device. This includes class
                names, student names, participation records, and session logs.
                All data stays on your device unless you choose to export it as
                CSV.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">How We Use Your Data</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                We do not collect, transmit, or sell your classroom data. The
                app works offline. Exported CSV files are created and shared by
                you at your discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Storage</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Participation data is stored locally on your Android device. We
                do not have access to your data. You can delete the app at any
                time to remove all stored data.
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
