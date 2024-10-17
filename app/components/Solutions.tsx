export default function Solutions() {
  const solutions = [
    { title: 'Data Analysis & Visualization', stat: '30%', desc: 'faster insights with our interactive dashboards' },
    { title: 'Machine Learning', stat: '20%', desc: 'faster model deployment with our automated MLOps pipelines' },
    { title: 'Generative AI Solutions', stat: '50%', desc: 'reduction in content creation time' },
    { title: 'Strategic Design Interventions', stat: '40%', desc: 'improvement in user engagement' },
    { title: 'MLOps & Pipeline Automation', stat: '60%', desc: 'reduction in model maintenance time' },
    { title: 'Project Management', stat: '25%', desc: 'increase in project completion rate' }
  ];

  return (
    <section className="section bg-off-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-warm-brown">Our Solutions for Transforming Your Business</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-matte-green text-off-white p-6 rounded-lg shadow-md card">
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-3xl font-bold mb-2">{solution.stat}</p>
              <p>{solution.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}