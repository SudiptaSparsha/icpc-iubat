"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#04060c] text-slate-300 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand/About host */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* Balloon Graphic */}
              <div className="flex items-end space-x-[-4px] h-7">
                <div className="w-4 h-6 bg-brand-blue rounded-t-full rounded-b-2xl relative shadow-md"></div>
                <div className="w-4 h-7 bg-brand-gold rounded-t-full rounded-b-2xl relative shadow-md z-10"></div>
                <div className="w-4 h-6 bg-brand-red rounded-t-full rounded-b-2xl relative shadow-md"></div>
              </div>
              <span className="font-extrabold text-white text-lg tracking-wide uppercase">
                ICPC Asia Dhaka
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hosted by International University of Business Agriculture and Technology (IUBAT). Creating future programming global leaders through excellence.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-brand-blue hover:bg-slate-700 transition-colors flex items-center justify-center w-9 h-9" aria-label="Facebook">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-brand-blue hover:bg-slate-700 transition-colors flex items-center justify-center w-9 h-9" aria-label="Twitter">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://iubat.edu" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-brand-gold hover:bg-slate-700 transition-colors flex items-center justify-center w-9 h-9" aria-label="Website">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-brand-red hover:bg-slate-700 transition-colors flex items-center justify-center w-9 h-9" aria-label="GitHub">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-blue transition-colors">About the Contest</Link>
              </li>
              <li>
                <Link href="/contest" className="hover:text-brand-blue transition-colors">Rules & Environment</Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-brand-blue transition-colors">Team Registration</Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-brand-blue transition-colors">Registered Teams</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-brand-blue transition-colors">Practice & Tutorials</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base">Contest Host Office</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <span>4 Embankment Drive Road, Sector 10, Uttara Model Town, Dhaka 1230, Bangladesh.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <span>+880-2-55092442</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-red shrink-0" />
                <span>icpc@iubat.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base">Stay Updated</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Subscribe to our regional mailing list for live announcements, schedules, and ranking details.
            </p>
            {subscribed ? (
              <div className="p-3 bg-brand-indigo/20 border border-brand-blue/30 rounded-lg text-brand-blue text-sm font-semibold">
                ✓ Thank you! You've successfully subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 text-slate-100 placeholder-slate-500 border border-slate-700 rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:border-brand-blue grow"
                />
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-indigo text-white font-bold px-4 py-2 rounded-lg text-sm transition-all"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ICPC Asia Dhaka Regional Contest. Hosted by IUBAT. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400">Terms of Use</a>
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
