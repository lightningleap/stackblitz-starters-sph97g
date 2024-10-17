import Image from 'next/image';

export default function HomeSection() {
  return (
    <section className="section bg-off-white">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Empowering Businesses through Data-Driven Insights and AI Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Unlock Growth and Efficiency with Tailored Data Science and AI Innovations
        </p>
        <button className="btn-primary text-lg">Discover Your Data Potential</button>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { stat: '98%', desc: 'Customer Satisfaction Rate' },
            { stat: '20+', desc: 'AI Projects Delivered' },
            { stat: '40%', desc: 'Improvement in Operational Efficiency' },
            { stat: '10,000+', desc: 'Automated Processes Completed' },
          ].map((item, index) => (
            <div key={index} className="bg-matte-green text-off-white p-6 rounded-lg shadow-md card">
              <h3 className="text-3xl font-bold mb-2">{item.stat}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}