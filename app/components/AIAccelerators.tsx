export default function AIAccelerators() {
  const accelerators = [
    'LLM Fine-tuning',
    'Vision and Browser Automation',
    'Exploratory Data Analysis (EDA)',
    'ETL Pipelines',
    'MLOps & Workflow Automation',
    'Business Insights & Classification Models'
  ];

  return (
    <section className="section bg-off-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-warm-brown">Supercharge Your Business with Our AI Accelerators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accelerators.map((accelerator, index) => (
            <div key={index} className="bg-matte-green text-off-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{accelerator}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}