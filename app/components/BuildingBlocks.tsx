export default function BuildingBlocks() {
  const capabilities = [
    'Intelligence Augmentation (IA)',
    'LLM Fine-tuning',
    'Autonomous Agents',
    'Retrieval Augmented Generation (RAG)',
    'Structured Data Extraction',
    'Multimodal AI'
  ];

  return (
    <section className="section bg-warm-brown text-off-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tailored AI Solutions for Every Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-off-white text-dark-gray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-warm-brown">{capability}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}