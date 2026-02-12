"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: true },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Pricing", href: "/pricing" },
    { name: "Pages", href: "/pages", hasDropdown: true },
    { name: "Contacts", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl rounded-2xl border border-white/10 ${scrolled
        ? "bg-black/60 backdrop-blur-xl py-2 shadow-2xl"
        : "bg-black/40 backdrop-blur-md py-3"
        }`}
    >
      <div className="px-6 md:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-1 sm:gap-1.5 md:gap-2 group transition-transform duration-300 hover:scale-105">
              {/* Left Side - English Text */}
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline">
                  <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#C9A961]">Digital</span>
                  <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">Line</span>
                </div>
                <span className="text-[7px] sm:text-[9px] md:text-[10px] text-white/40 tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-0.5 sm:mt-1">GRAPHICS L.L.C</span>
              </div>

              {/* Center - Decorative D Image */}
              <div className="flex items-center">
                <div className="relative w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12">
                  <Image
                    src="/ddddddd.png"
                    alt="D Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Side - Arabic Text */}
              <div className="flex flex-col leading-none text-right">
                <div className="flex items-baseline">
                  <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#C9A961]">الرقمي</span>
                  <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white">الخط</span>
                </div>
                <span className="text-[7px] sm:text-[9px] md:text-[10px] text-white/40 tracking-wide mt-0.5 sm:mt-1">للتصميم والطباعة ش.ذ.م.م</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center group text-white/80 hover:text-white px-2 py-2 text-sm font-medium transition-all"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg
                      className="ml-1 w-3 h-3 text-white/40 group-hover:text-white/80 transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Search and CTA */}
            <div className="flex items-center space-x-6 border-l border-white/10 pl-8">
              <button className="text-white/60 hover:text-white transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <Link
                href="/get-started"
                className="flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-black px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:-translate-y-0.5"
              >
                Get Started
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="text-white/60 hover:text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 focus:outline-none transition-all"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-black/40 backdrop-blur-xl border-t border-white/5 mx-4 mb-4 rounded-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white hover:bg-white/10 block px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              {link.hasDropdown && (
                <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              href="/get-started"
              className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white py-4 rounded-xl font-bold transition-all shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Get Started
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
