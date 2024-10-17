import Image from 'next/image';

export default function CompanyLogos() {
  const logos = [
    '/logo1.png', '/logo2.png', '/logo3.png', '/logo4.png', '/logo5.png', '/logo6.png'
  ];

  return (
    <section className="section bg-warm-brown">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-off-white">Trusted By Leading Companies</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="w-32 h-32 bg-off-white rounded-full flex items-center justify-center">
              <Image src={logo} alt={`Company logo ${index + 1}`} width={80} height={80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}