export function TrustStrip() {
  const items = [
    { label: "Built for teachers" },
    { label: "Simple classroom workflow" },
    { label: "Designed for daily use" },
  ];

  return (
    <section className="border-y border-border-subtle bg-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {items.map(({ label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
              <span className="font-medium text-sm sm:text-base text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
