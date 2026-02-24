const ProofMetrics = () => {
  const metrics = [
    { value: "10×", label: "Faster delivery" },
    { value: "24/7", label: "Always-on operations" },
    { value: "47%", label: "Avg. conversion lift" },
    { value: "$150K", label: "Max annual savings" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[hsl(var(--text-primary))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[hsl(var(--accent))] uppercase tracking-wider mb-4">
            Results that speak
          </p>
          <h2 className="heading-lg text-white mb-4">
            Proof that compounds
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[hsl(var(--accent))] mb-3">
                {metric.value}
              </div>
              <div className="text-white/70 text-sm sm:text-base font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/40 text-xs sm:text-sm mt-12 text-center max-w-2xl mx-auto">
          Figures based on composite outcomes across sprints and deployments.
        </p>
      </div>
    </section>
  );
};

export default ProofMetrics;
