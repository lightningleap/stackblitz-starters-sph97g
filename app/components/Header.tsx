'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-warm-brown text-off-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-playfair font-bold">
          Lightning Leap Analytics
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="#solutions">Solutions</Link></li>
            <li><Link href="#case-studies">Case Studies</Link></li>
            <li><Link href="#blog">Blog</Link></li>
            <li><Link href="#contact" className="btn-primary">Contact Us</Link></li>
          </ul>
        </nav>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link href="#solutions">Solutions</Link></li>
            <li><Link href="#case-studies">Case Studies</Link></li>
            <li><Link href="#blog">Blog</Link></li>
            <li><Link href="#contact" className="btn-primary">Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}