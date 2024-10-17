import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-warm-brown text-off-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lightning Leap Analytics</h3>
            <p>Empowering businesses through data-driven insights and AI solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#solutions">Solutions</Link></li>
              <li><Link href="#case-studies">Case Studies</Link></li>
              <li><Link href="#blog">Blog</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@lightingleap.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Lightning Leap Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}