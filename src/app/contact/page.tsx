"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative w-full py-16 lg:py-24">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[110px] dark:bg-brand-blue/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Contact the Regional Office
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Have questions regarding eligibility, registration payments, or accommodation? Drop us a line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* CONTACT INFO CARD */}
          <div className="lg:col-span-1 glass p-8 rounded-3xl flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-brand-blue shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Contest Host Secretariat</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      4 Embankment Drive Road, Sector 10, Uttara Model Town, Dhaka 1230, Bangladesh.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-brand-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Phone Line</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">+880-2-55092442</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-brand-red shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Support Email</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">icpc@iubat.edu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social details */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6 mt-8">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Connect With Us</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-blue hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center w-9 h-9" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
                </a>
                <a href="#" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-blue hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center w-9 h-9" aria-label="Twitter">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-blue hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center w-9 h-9" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://iubat.edu" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-gold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center w-9 h-9" aria-label="Website">
                  <Globe size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-2 glass p-8 rounded-3xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 flex flex-col items-center justify-center h-full"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-xl">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm leading-relaxed">
                    We will review your inquiry and get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 px-6 py-3 rounded-xl bg-brand-blue text-white font-bold text-xs shadow-md"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Registration Payment Query"
                      className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message details here..."
                      className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-blue text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
