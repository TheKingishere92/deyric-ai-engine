const ProofMetrics = () => {
  const metrics = [
    { value: "10×", label: "Faster delivery" },
    { value: "24/7", label: "Always-on ops" },
    { value: "47%", label: "Avg. conversion lift" },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-4">Proof that compounds</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto mt-12 sm:mt-16">
          {metrics.map((metric, index) => (
            <div key={index} className="group py-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-hero bg-clip-text text-transparent mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="text-secondary text-base sm:text-lg font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted text-xs sm:text-sm mt-8 sm:mt-12 max-w-2xl mx-auto px-4">
          Figures based on composite outcomes across sprints and deployments.
        </p>
      </div>
    </section>
  );
};

export default ProofMetrics;