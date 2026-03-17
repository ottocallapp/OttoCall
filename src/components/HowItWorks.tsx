const STEPS = [
  {
    step: 1,
    title: "Create your class",
    description:
      "Add students to a class. Mark who's active or absent. You're ready in minutes.",
  },
  {
    step: 2,
    title: "Run a live session",
    description:
      "Start a session, call on students fairly, and mark engagement as you go. Undo and volunteer options when needed.",
  },
  {
    step: 3,
    title: "Review and export",
    description:
      "Check participation history, see response rates, and export session logs or student summaries as CSV.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three steps from setup to reporting. No complexity, no clutter.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-12 md:gap-8">
          {STEPS.map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold text-xl shadow-soft">
                {item.step}
              </div>
              <h3 className="mt-6 font-semibold text-foreground text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-muted-foreground max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
