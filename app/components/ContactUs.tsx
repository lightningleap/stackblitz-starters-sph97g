export default function ContactUs() {
  return (
    <section id="contact" className="section bg-warm-brown text-off-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 rounded bg-off-white text-dark-gray" required />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block mb-2">Company Name</label>
            <input type="text" id="company" name="company" className="w-full p-2 rounded bg-off-white text-dark-gray" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 rounded bg-off-white text-dark-gray" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">Phone (Optional)</label>
            <input type="tel" id="phone" name="phone" className="w-full p-2 rounded bg-off-white text-dark-gray" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message (How can we help you?)</label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 rounded bg-off-white text-dark-gray" required></textarea>
          </div>
          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
}