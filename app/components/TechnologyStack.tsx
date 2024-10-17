export default function TechnologyStack() {
  const technologies = [
    'GPT-4', 'LLAMA 2', 'Hugging Face', 'LlamaIndex', 'LangChain',
    'PyTorch', 'TensorFlow', 'Spacy', 'OpenCV', 'ONNX', 'FastAI', 'Scikit-learn'
  ];

  return (
    <section className="section bg-warm-brown text-off-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Technology Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-off-white text-dark-gray px-4 py-2 rounded-full">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}