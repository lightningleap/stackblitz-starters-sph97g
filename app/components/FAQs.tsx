export default function FAQs() {
  const faqs = [
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across various industries including healthcare, finance, retail, and manufacturing, tailoring our AI and data science solutions to specific sector needs.'
    },
    {
      question: 'How long does it take to implement a solution?',
      answer: 'Depending on the complexity, our projects typically range from a few weeks (proof of concept) to several months for full-scale deployments.'
    },
    {
      question: 'What kind of data do I need for AI projects?',
      answer: "We can work with various types of data, including structured and unstructured datasets. We'll help you assess data readiness and prepare it for AI analysis."
    },
    {
      question: 'What is the cost of your services?',
      answer: 'Our pricing is customized based on the scope of the project. Contact us for a consultation and detailed quote.'
    },
    {
      question: 'How do I get started?',
      answer: "Book an initial consultation with our team to discuss your needs and how we can help. We offer tailored solutions for each client's unique challenges."
    }
  ];

  return (
    <section className="section bg-off-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-warm-brown">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-matte-green text-off-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}