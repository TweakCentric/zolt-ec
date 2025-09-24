"use client";

import logo from "@/../public/zolt_logo.svg";
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 md:px-10 py-4">
        <div className="flex justify-between items-center">
          <Image src={logo} alt='logo' className="w-[110px] h-[50px] md:w-[175px] md:h-[64px]" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#why-now" className="text-[24px] text-black hover:text-[#189132]">Why Now?</a>
            <a href="#how-it-works" className="text-[24px] text-black hover:text-[#189132]">How it Works</a>
          </nav>
          
          {/* Desktop CTA Button */}
          <Link href="/join-the-waitlist" className="hidden md:block bg-[#189132] hover:bg-green-700 cursor-pointer py-2 px-6.5 text-white rounded-full tracking-wide text-[23px]">
            Join the Waitlist
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            aria-expanded={isMobileMenuOpen}
            className="md:hidden relative w-6 h-6 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Top */}
            <span
              className={`absolute left-0 w-6 h-[2px] bg-black rounded transition-transform duration-300 transform origin-center
                ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}
            />
            {/* Middle */}
            <span
              className={`absolute left-0 w-6 h-[2px] bg-black rounded transition-opacity duration-200
                ${isMobileMenuOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'}`}
            />
            {/* Bottom */}
            <span
              className={`absolute left-0 w-6 h-[2px] bg-black rounded transition-transform duration-300 transform origin-center
                ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`}
            />
          </button>

        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 backdrop-blur-xs">
            <nav className="flex flex-col space-y-4 pt-4">
              <a 
                href="#why-now" 
                className="text-gray-700 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Now?
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it Works
              </a>
              <button className="bg-[#189132] hover:bg-green-700 cursor-pointer py-2 px-6.5 text-white rounded-full tracking-wide text-[17px] w-fit">
                Join the Waitlist
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
