const BENEFITS = [
  {
    title: "Less bias",
    description: "The app picks fairly so you don't rely on memory or habit.",
  },
  {
    title: "More visibility",
    description: "See who's been called, who hasn't, and how often.",
  },
  {
    title: "Better consistency",
    description: "Same process every class. Students know what to expect.",
  },
  {
    title: "Quick reporting",
    description: "Export data for records, conferences, or admin.",
  },
];

export function WhyTeachers() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why teachers like it
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Practical benefits that make a difference in real classrooms.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-lg border border-border-subtle p-6 bg-background hover:border-accent transition-colors"
            >
              <h3 className="font-semibold text-foreground text-lg">
                {benefit.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
