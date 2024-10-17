export default function CaseStudies() {
  const caseStudies = [
    { title: 'Customer Support Chatbot', industry: 'E-commerce' },
    { title: 'Legal Document Analysis', industry: 'Legal Services' },
    { title: 'EdTech Chatbot', industry: 'Education' }
  ];

  return (
    <section className="section bg-warm-brown text-off-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-off-white text-dark-gray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-warm-brown">{study.title}</h3>
              <p>Industry: {study.industry}</p>
              <button className="btn-secondary mt-4">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}