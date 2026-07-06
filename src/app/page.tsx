"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Users, 
  School, 
  Code, 
  Trophy, 
  Volume2, 
  ArrowUpRight, 
  HelpCircle,
  Sparkles,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  // Countdown Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const contestDate = new Date("November 21, 2026 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = contestDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Stats Intersection Observer
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Announcements state
  const announcements = [
    {
      id: 1,
      tag: "NEW",
      title: "Online Preliminary Registration is Now Open!",
      date: "July 06, 2026",
      desc: "Coaches can now register their university teams for the preliminary round of the ICPC Asia Dhaka Regional Contest.",
    },
    {
      id: 2,
      tag: "IMPORTANT",
      title: "Dhaka Regional Host Announced: IUBAT Campus",
      date: "June 15, 2026",
      desc: "We are thrilled to welcome all local and international teams to the green campus of IUBAT for the regional final.",
    },
    {
      id: 3,
      tag: "RULES",
      title: "Updated Environment Configuration details released",
      date: "May 28, 2026",
      desc: "Check out the official software environment parameters and compiler flags for the upcoming contest.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Tanzim Rezwan",
      role: "World Finals Contestant '24",
      uni: "IUBAT Alumni",
      text: "Representing our university in the ICPC Dhaka regional and then advancing was a dream come true. The organization and volunteer support at IUBAT were exceptional!",
    },
    {
      name: "Dr. Sayeed Hasan",
      role: "Coach",
      uni: "DU Programming Club",
      text: "Dhaka Regional contests have consistently pushed our students to achieve international standards. IUBAT provides the perfect campus layout and server setups to host this scale.",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // FAQ
  const faqs = [
    {
      q: "Who is eligible to participate in the contest?",
      a: "Full-time undergraduate students from recognized universities who meet the ICPC eligibility rules (within 5 years of starting university study). Each team consists of 3 contestants and 1 coach.",
    },
    {
      q: "How does the registration process work?",
      a: "Registration is a 2-step process. First, complete the online preliminary form. Selected teams will receive confirmation to pay the registration fees and submit physical documents.",
    },
    {
      q: "What programming languages are officially supported?",
      a: "C, C++, Java, Kotlin, and Python 3 are supported. Please refer to the Contest page for exact compiler versions and performance runtime parameters.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[120px] dark:bg-brand-blue/5"></div>
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-gold/10 blur-[130px] dark:bg-brand-gold/5"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden grid-bg-pattern dark:bg-opacity-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Host Banner */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-brand-indigo dark:text-brand-blue mb-8 border border-brand-blue/20"
            >
              <Sparkles size={14} className="text-brand-gold animate-pulse" />
              <span>Hosting the Future of Computing Talent in Dhaka</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900 dark:text-white"
            >
              The 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-blue to-brand-gold">ICPC Asia Dhaka</span> Regional
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Join the most prestigious competitive programming event in South Asia, hosted on the green, sustainable campus of **IUBAT**. Solve complex algorithms and compete for a spot in the World Finals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                href="/registration"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-blue hover:from-brand-blue hover:to-brand-indigo text-white font-bold shadow-xl shadow-brand-blue/30 flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <span>Register Team</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold flex items-center justify-center gap-2"
              >
                <span>About Host</span>
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-brand-blue/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue group-hover:scale-110 transition-transform">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Contest Date</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">November 21, 2026</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-brand-gold/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Venue</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">IUBAT Campus, Uttara, Dhaka</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-brand-red/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-brand-red/10 text-brand-red group-hover:scale-110 transition-transform">
                <Trophy size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">Registration Limit</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Preliminary Phase Closes Oct 15</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN TIMER */}
      <section className="py-12 bg-gradient-to-r from-brand-indigo to-brand-blue text-white relative shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3 justify-center md:justify-start">
              <span>Countdown to Main Contest</span>
            </h2>
            <p className="text-blue-100 text-sm mt-1">Ready your compilers, the algorithmic battle begins soon!</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            {[
              { label: "DAYS", val: timeLeft.days },
              { label: "HOURS", val: timeLeft.hours },
              { label: "MINS", val: timeLeft.minutes },
              { label: "SECS", val: timeLeft.seconds },
            ].map((unit, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center font-mono text-2xl sm:text-4xl font-black border border-white/20 shadow-md">
                  {String(unit.val).padStart(2, "0")}
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-blue-100 mt-2">{unit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section ref={statsRef} className="py-20 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Regional Contest in Numbers
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              The Dhaka Regional Contest represents one of the largest competitive computing communities in the region.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users size={28} />, label: "Contestants", val: 450, color: "text-brand-blue" },
              { icon: <School size={28} />, label: "Universities", val: 85, color: "text-brand-gold" },
              { icon: <Code size={28} />, label: "Problems Solved", val: 18500, color: "text-brand-red" },
              { icon: <Trophy size={28} />, label: "World Finals Slots", val: 2, color: "text-brand-indigo" },
            ].map((stat, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl text-center flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <div className={`p-4 rounded-full bg-slate-100 dark:bg-slate-800 ${stat.color} mb-4`}>
                  {stat.icon}
                </div>
                <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white block mb-1">
                  {statsInView ? <CountUp end={stat.val} duration={2.5} separator="," /> : "0"}
                  {stat.val === 2 ? "" : "+"}
                </span>
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Volume2 className="text-brand-red animate-pulse" size={28} />
                <span>Latest Announcements</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Stay updated with recent notices, guidelines, and changes regarding the contest timeline.
              </p>
            </div>
            <Link href="/about" className="text-sm font-bold text-brand-blue hover:text-brand-indigo flex items-center gap-1 group">
              <span>View Timeline</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {announcements.map((ann, idx) => (
              <div
                key={ann.id}
                className="glass p-6 rounded-2xl hover:border-brand-blue/30 transition-all duration-300 flex flex-col sm:flex-row gap-4 justify-between items-start"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      ann.tag === "NEW" 
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
                        : ann.tag === "IMPORTANT"
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400"
                    }`}>
                      {ann.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{ann.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg hover:text-brand-blue transition-colors">
                    {ann.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {ann.desc}
                  </p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-brand-blue hover:text-white transition-all shrink-0">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS BRAND MARQUEE */}
      <section className="py-16 bg-slate-50 dark:bg-[#090d19] border-y border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Our Generous Partners</span>
          <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">Sponsored by Industry Leaders</h3>
        </div>
        
        <div className="marquee-container">
          <div className="marquee-content">
            {["JetBrains", "Brain Station 23", "BJIT", "Pathao", "bKash", "Aramco", "Google Cloud", "TigerIT"].map((sponsor, idx) => (
              <div
                key={idx}
                className="glass px-8 py-5 rounded-xl flex items-center justify-center min-w-[180px] text-slate-400 hover:text-brand-blue hover:scale-105 transition-all cursor-pointer font-extrabold text-lg"
              >
                {sponsor}
              </div>
            ))}
          </div>
          {/* Repeat for seamless infinite loop */}
          <div className="marquee-content" aria-hidden="true">
            {["JetBrains", "Brain Station 23", "BJIT", "Pathao", "bKash", "Aramco", "Google Cloud", "TigerIT"].map((sponsor, idx) => (
              <div
                key={idx + 10}
                className="glass px-8 py-5 rounded-xl flex items-center justify-center min-w-[180px] text-slate-400 hover:text-brand-blue hover:scale-105 transition-all cursor-pointer font-extrabold text-lg"
              >
                {sponsor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Green Campus Gallery
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Take a glance at our beautiful sustainable lake-view campus, classrooms, computer labs, and previous contests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Main Academic Building", color: "from-brand-blue/30 to-brand-indigo/30", label: "Sustainable architecture and environment" },
              { title: "Main Computing Center", color: "from-brand-gold/30 to-brand-indigo/30", label: "High-spec infrastructure for contestants" },
              { title: "Campus Lake & Greenery", color: "from-brand-red/30 to-brand-blue/30", label: "Beautiful scenic walk zones" },
            ].map((pic, idx) => (
              <div
                key={idx}
                className="group relative h-72 rounded-2xl overflow-hidden glass hover:shadow-2xl transition-all duration-300"
              >
                {/* SVG/CSS Graphic representing photo */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${pic.color} flex flex-col items-center justify-center p-6 text-center`}>
                  <Code size={40} className="text-white/60 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white/30 text-xs font-mono">IMAGE PLACEHOLDER</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 text-white translate-y-3 group-hover:translate-y-0 transition-transform">
                  <h4 className="font-bold text-lg">{pic.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{pic.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-indigo">
              <span>View Full Campus Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Success Stories</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                What the Community Says
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Hear from contestants and coaches who participated in ICPC Dhaka Regionals and advanced to global stages.
              </p>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeTestimonial === idx ? "bg-brand-blue w-6" : "bg-slate-300 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 relative min-h-[220px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="glass p-8 sm:p-10 rounded-2xl w-full relative"
                >
                  <MessageSquare className="absolute top-6 right-6 text-slate-200 dark:text-slate-800" size={40} />
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {testimonials[activeTestimonial].role} — {testimonials[activeTestimonial].uni}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Quick answers to the most common queries about registration, guidelines and rules.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 font-bold text-slate-900 dark:text-white flex items-center justify-between hover:bg-slate-100/50 dark:hover:bg-slate-850/50"
                  >
                    <span>{faq.q}</span>
                    <HelpCircle size={18} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-brand-blue' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-indigo">
              <span>View All Practice Resources & FAQs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-10 sm:p-16 rounded-3xl text-center bg-gradient-to-br from-brand-indigo/10 via-brand-blue/5 to-transparent border border-brand-blue/20">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Compete, Code and Make History!
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
              Don't miss the chance to test your algorithmic and problem-solving limits against the best minds in South Asia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/registration"
                className="px-8 py-4 rounded-xl bg-brand-blue hover:bg-brand-indigo text-white font-extrabold shadow-lg shadow-brand-blue/20 hover:scale-105 transition-transform"
              >
                Register a Team
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl glass hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-extrabold"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
