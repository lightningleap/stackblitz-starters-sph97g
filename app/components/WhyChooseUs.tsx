export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Expert Team',
      description: 'A highly skilled team with domain expertise across AI, data science, and MLOps, dedicated to solving complex challenges.'
    },
    {
      title: 'Tailored Solutions',
      description: 'Every business is unique, and so are our solutions. We offer custom AI and analytics solutions that fit your specific needs.'
    },
    {
      title: 'Proven Track Record',
      description: 'Our solutions have consistently delivered measurable outcomes, from enhanced productivity to better decision-making capabilities.'
    },
    {
      title: 'End-to-End Support',
      description: 'We guide you through every step of the process, from consultation and strategy development to deployment and long-term support.'
    }
  ];

  return (
    <section className="section bg-warm-brown text-off-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Lightning Leap Analytics?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-off-white text-dark-gray p-6 rounded-lg shadow-md card">
              <h3 className="text-xl font-bold mb-2 text-warm-brown">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}