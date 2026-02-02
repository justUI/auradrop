"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-dark px-4 sm:px-6 py-3 rounded-none">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#CCFF00] flex items-center justify-center font-bold text-black text-xl">
            A
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tighter uppercase italic">
            AuraDrop
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          <a href="#problem" className="hover:text-[#CCFF00] transition-colors">
            THE PROBLEM
          </a>
          <a
            href="#solution"
            className="hover:text-[#CCFF00] transition-colors"
          >
            HOW IT WORKS
          </a>
          <a
            href="#audience"
            className="hover:text-[#CCFF00] transition-colors"
          >
            FOR WHO?
          </a>
          <a
            href="#flywheel"
            className="hover:text-[#CCFF00] transition-colors"
          >
            OUR WAY
          </a>
          <a
            href="#waitlist"
            className="hover:text-[#CCFF00] transition-colors"
          >
            WAITLIST
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 glass-dark p-4 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 font-medium text-center">
            <a
              href="#problem"
              className="hover:text-[#CCFF00] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              THE PROBLEM
            </a>
            <a
              href="#solution"
              className="hover:text-[#CCFF00] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              HOW IT WORKS
            </a>
            <a
              href="#audience"
              className="hover:text-[#CCFF00] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FOR WHO?
            </a>
            <a
              href="#flywheel"
              className="hover:text-[#CCFF00] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              OUR WAY
            </a>
            <a
              href="#waitlist"
              className="hover:text-[#CCFF00] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              WAITLIST
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
