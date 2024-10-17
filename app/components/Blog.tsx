export default function Blog() {
  const blogPosts = [
    { title: '7 DIY Data Science Projects', date: '2023-08-15' },
    { title: 'Data Analysis Made Easy: Text2Code for Jupyter Notebook', date: '2023-08-10' },
    { title: 'My Experience with HuggingFace Dataset Hub', date: '2023-08-05' }
  ];

  return (
    <section className="section bg-off-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-warm-brown">Latest Insights & Innovations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-matte-green text-off-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm">{post.date}</p>
              <button className="btn-secondary mt-4">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}