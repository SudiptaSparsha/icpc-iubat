"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Download, 
  HelpCircle, 
  ExternalLink, 
  Search, 
  Video, 
  Code2
} from "lucide-react";

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "practice" | "tutorials" | "downloads" | "faq">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const practiceProblems = [
    { title: "Standard Algorithmic Geometry", difficulty: "Medium", platform: "Codeforces", link: "#" },
    { title: "Dynamic Programming Optimizations", difficulty: "Hard", platform: "AtCoder", link: "#" },
    { title: "Advanced Graph Connectivity", difficulty: "Medium-Hard", platform: "CSES", link: "#" },
    { title: "String Suffix Arrays & Automatas", difficulty: "Hard", platform: "Codechef", link: "#" },
  ];

  const tutorials = [
    { title: "Segment Tree with Lazy Propagation", type: "PDF Guide", author: "IUBAT Programming Club", size: "1.2 MB" },
    { title: "Introduction to Max Flow & Min Cut Algorithms", type: "Video Lecture", author: "Dr. Selim Habib", size: "45 mins" },
    { title: "Effective Team Strategy & Time Allocation", type: "Text Tutorial", author: "Tanzim Rezwan", size: "4 pages" },
  ];

  const downloads = [
    { title: "Official ICPC Team Reference Notebook Template", type: "LaTeX / PDF", size: "350 KB" },
    { title: "PC^2 Client Environment Local Sandbox Setup", type: "ZIP Archive", size: "45 MB" },
    { title: "DOMjudge Contestant User Guide Manual", type: "PDF Manual", size: "1.8 MB" },
  ];

  const faqs = [
    { q: "Can we use external libraries in the contest?", a: "No. You can only use standard libraries provided by the language compilers (e.g. STL for C++, Standard library for Java/Python)." },
    { q: "Is internet access available during the mock or main contest?", a: "No. The contest network is strictly offline. You will have access only to the judging server system and pre-installed documentations." },
    { q: "What should we do in case of machine hardware failure?", a: "Raise your hand immediately to signal a volunteer. A technical team member will assist you or allocate a buffer workstation." },
    { q: "Can coaches sit inside the computer labs during the contest?", a: "No. Coaches must wait in the designated Coach Lounge zone where a live scoreboard will be displayed." },
  ];

  // Filters logic
  const filteredPractice = practiceProblems.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredTutorials = tutorials.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredDownloads = downloads.filter(d => d.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredFaqs = faqs.filter(f => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="relative w-full py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-blue/10 blur-[120px] dark:bg-brand-blue/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Contest Prep</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Practice Resources & Guides
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Access previous contest archives, tutorials, software setup installers, guidelines, and detailed FAQs.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="glass p-6 rounded-2xl mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Resources" },
              { id: "practice", label: "Practice Problems" },
              { id: "tutorials", label: "Tutorials & Videos" },
              { id: "downloads", label: "Downloads" },
              { id: "faq", label: "Rules FAQ" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-brand-blue text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-450 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-brand-blue"
            />
          </div>
        </div>

        {/* Resources Grid/Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* PRACTICE SECTION */}
          {(activeTab === "all" || activeTab === "practice") && (
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <Code2 className="text-brand-blue" size={20} />
                <span>Practice Archives</span>
              </h3>
              <div className="flex flex-col gap-4">
                {filteredPractice.map((prob, idx) => (
                  <div key={idx} className="glass p-5 rounded-xl hover:border-brand-blue/30 transition-all flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{prob.title}</h4>
                      <p className="text-xs text-slate-450 mt-1">{prob.platform} — Difficulty: {prob.difficulty}</p>
                    </div>
                    <a href={prob.link} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-brand-blue transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TUTORIALS SECTION */}
          {(activeTab === "all" || activeTab === "tutorials") && (
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <BookOpen className="text-brand-gold" size={20} />
                <span>Lectures & Tutorials</span>
              </h3>
              <div className="flex flex-col gap-4">
                {filteredTutorials.map((tut, idx) => (
                  <div key={idx} className="glass p-5 rounded-xl hover:border-brand-gold/30 transition-all flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{tut.title}</h4>
                      <p className="text-xs text-slate-450 mt-1">{tut.type} — {tut.author}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-gold">{tut.size}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DOWNLOADS SECTION */}
          {(activeTab === "all" || activeTab === "downloads") && (
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <Download className="text-brand-red" size={20} />
                <span>Software & Downloads</span>
              </h3>
              <div className="flex flex-col gap-4">
                {filteredDownloads.map((dl, idx) => (
                  <div key={idx} className="glass p-5 rounded-xl hover:border-brand-red/30 transition-all flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{dl.title}</h4>
                      <p className="text-xs text-slate-450 mt-1">{dl.type}</p>
                    </div>
                    <button className="p-2.5 rounded-lg bg-brand-red/10 text-brand-red hover:bg-brand-red hover:text-white transition-colors flex items-center gap-1">
                      <Download size={14} />
                      <span className="text-[10px] font-bold">{dl.size}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* FAQ ACCORDION SECTION */}
        {(activeTab === "all" || activeTab === "faq") && (
          <section className="mt-20 max-w-4xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <HelpCircle className="text-brand-indigo" size={22} />
              <span>Contest Rules & Conduct FAQ</span>
            </h3>
            <div className="flex flex-col gap-4">
              {filteredFaqs.map((faq, idx) => (
                <div key={idx} className="glass p-6 rounded-xl">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Q: {faq.q}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
