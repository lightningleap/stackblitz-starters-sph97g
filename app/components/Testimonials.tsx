export default function Testimonials() {
  const testimonials = [
    {
      quote: "Lightning Leap Analytics helped us streamline our data processes, saving us over 30% in time and cost.",
      author: "CTO, Retail Firm"
    },
    {
      quote: "Their expertise in AI has revolutionized our customer support system, allowing us to handle more queries with fewer resources.",
      author: "COO, EdTech Company"
    },
    {
      quote: "We saw a 40% improvement in operational efficiency after deploying their custom AI solution.",
      author: "Director, Legal Services"
    }
  ];

  return (
    <section className="section bg-off-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-warm-brown">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-matte-green text-off-white p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-bold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}