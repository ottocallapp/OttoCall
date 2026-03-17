"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "What is OttoCall?",
    answer:
      "OttoCall is an app that helps teachers call on students fairly during class. It tracks participation over time, runs live sessions where you mark engagement, and lets you export reports as CSV.",
  },
  {
    question: "Is it for individual teachers?",
    answer:
      "Yes. OttoCall is designed for individual teachers who want a simple, reliable way to ensure fair participation in their classrooms. No school-wide rollout required.",
  },
  {
    question: "What does OttoCall track?",
    answer:
      "It tracks who was called, when, and how they responded (Engaged, Tried, No response). You can see response rates, class averages, and per-student participation scores over time.",
  },
  {
    question: "Can I export classroom data?",
    answer:
      "Yes. You can export session logs or student summaries as CSV. Choose your date range (today, 7 days, or all) and optionally include notes.",
  },
  {
    question: "Does it work during live class use?",
    answer:
      "Yes. OttoCall is built for live use. Start a session, call on students as the app suggests, mark their participation, and move to the next. Undo and volunteer options are available when you need them.",
  },
  {
    question: "What is your privacy policy?",
    answer:
      "OttoCall stores all data locally on your device. We do not collect, transmit, or sell your classroom data. See our full Privacy Policy for details.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-muted">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={item.question}
              className="rounded-lg border border-border-subtle bg-background overflow-hidden hover:border-accent transition-colors"
            >
              <button
                type="button"
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-medium text-foreground hover:bg-secondary transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span
                  className={`shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-5 w-5 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-0 animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
