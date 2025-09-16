const ProofMetrics = () => {
  const metrics = [
    { value: "10×", label: "Faster delivery" },
    { value: "24/7", label: "Always-on ops" },
    { value: "47%", label: "Avg. conversion lift" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="heading-lg text-primary mb-4">Proof that compounds</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mt-16">
          {metrics.map((metric, index) => (
            <div key={index} className="group">
              <div className="text-6xl font-bold gradient-hero bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="text-secondary text-lg font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted text-sm mt-12 max-w-2xl mx-auto">
          Figures based on composite outcomes across sprints and deployments.
        </p>
      </div>
    </section>
  );
};

export default ProofMetrics;