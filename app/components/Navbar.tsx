"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Feature", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contacts", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // If it's a section link
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Height of fixed navbar + padding
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // If it's a regular route (if any in future)
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl rounded-2xl border ${scrolled
        ? "bg-white/15 backdrop-blur-sm border-white/10 py-1 sm:py-2 shadow-lg"
        : "bg-white border-gray-100 py-2 sm:py-4 shadow-sm"
        }`}
    >
      <div className="px-4 sm:px-6 md:px-10">
        <div className="flex justify-between items-center h-[70px] sm:h-20 md:h-19">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative flex items-center justify-center h-full w-64 sm:w-72" onClick={(e) => handleScroll(e, "#hero")}>
              <motion.div
                className="absolute top-1/2 left-[calc(50%+2px)] sm:left-1/2 -translate-x-1/2 -translate-y-1/2 h-[85px] w-[290px] sm:h-[99px] sm:w-[320px] z-50 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/Newlogo.png"
                  alt="Digital Line Graphics"
                  fill
                  className="object-contain pointer-events-auto"
                  priority
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="flex items-center group text-gray-700 hover:text-black px-2 py-2 text-sm font-medium transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Search and CTA */}
            <div className="flex items-center space-x-6 border-l border-black/10 pl-8">
              <button className="text-gray-500 hover:text-black transition-colors cursor-pointer">
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
              <a
                href="https://wa.me/971505552194"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-[#C9A84C]/25 hover:shadow-[#D4AF37]/40 hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Get a Quote</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black p-2 transition-colors"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
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
              ) : (
                <svg
                  className="h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden rounded-b-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-all border-b border-gray-50 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    {link.name}
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/971505552194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-black px-4 py-3 rounded-xl text-base font-bold transition-all shadow-lg shadow-[#C9A84C]/25 hover:shadow-[#D4AF37]/40 flex items-center justify-center gap-2"
                >
                  <span>Get a Quote</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
