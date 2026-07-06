"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Sun, Moon, Award, GraduationCap, Calendar } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contest", href: "/contest" },
    { name: "Registration", href: "/registration" },
    { name: "Teams", href: "/teams" },
    { name: "Resources", href: "/resources" },
    { name: "Feedback", href: "/feedback" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Balloons Icon representation */}
            <div className="flex items-end space-x-[-4px] h-9">
              <div className="w-5 h-7 bg-brand-blue rounded-t-full rounded-b-2xl relative shadow-md animate-bounce" style={{ animationDelay: '0.1s' }}>
                <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-brand-indigo rounded-full"></span>
              </div>
              <div className="w-5 h-8 bg-brand-gold rounded-t-full rounded-b-2xl relative shadow-md z-10 animate-bounce" style={{ animationDelay: '0.3s' }}>
                <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-brand-indigo rounded-full"></span>
              </div>
              <div className="w-5 h-7 bg-brand-red rounded-t-full rounded-b-2xl relative shadow-md animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-brand-indigo rounded-full"></span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                ICPC Asia Dhaka
              </span>
              <span className="text-sm font-bold text-brand-indigo dark:text-brand-blue flex items-center gap-1">
                Hosted by IUBAT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <Link
              href="/registration"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-indigo to-brand-blue text-white font-bold text-sm shadow-lg shadow-brand-indigo/20 hover:scale-105 active:scale-95 transition-all"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden glass fixed inset-x-0 top-[60px] border-b shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-semibold ${
                    isActive
                      ? "bg-brand-blue text-white"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/registration"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-brand-indigo to-brand-blue text-white font-bold"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
}
