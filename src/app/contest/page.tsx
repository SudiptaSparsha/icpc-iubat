"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  BookOpen, 
  Clock, 
  MapPin, 
  Cpu, 
  Monitor, 
  CheckCircle, 
  Code
} from "lucide-react";

export default function ContestPage() {
  const [activeTab, setActiveTab] = useState<"rules" | "env" | "schedule" | "venue">("rules");

  const rulesData = [
    {
      title: "Team Structure",
      desc: "Each team must consist of exactly three (3) eligible students enrolled in the same university. One coach must be present to officially register and verify team documents.",
    },
    {
      title: "Contest Conduct",
      desc: "Contestants are not allowed to communicate with anyone except their own team members and the contest officials. Any form of electronic communication devices (phones, watches, smart devices) is strictly prohibited.",
    },
    {
      title: "Reference Material",
      desc: "Teams may bring up to 25 pages of printed reference materials (Team Notebook) to the workspace. No digital materials, USB sticks, or books are allowed.",
    },
    {
      title: "Jury Decisions",
      desc: "All decisions by the Regional Jury are final. Clarification requests can be sent through the PC^2 or DOMjudge system interface during the active contest hours.",
    },
  ];

  const scheduleEvents = [
    {
      day: "Day 1: Friday, Nov 20, 2026",
      events: [
        { time: "08:30 AM - 10:30 AM", title: "Registration & Team Kit Collection", desc: "Main Entrance Lounge, Auditorium Building" },
        { time: "11:00 AM - 12:30 PM", title: "Inaugural Ceremony & Briefing", desc: "Main Auditorium Hall" },
        { time: "02:00 PM - 04:30 PM", title: "Practice & Mock Contest Session", desc: "Computing Center Labs (MANDATORY)" },
        { time: "05:00 PM - 06:00 PM", title: "Q&A and Tech Coordination", desc: "Auditorium Hall" },
      ],
    },
    {
      day: "Day 2: Saturday, Nov 21, 2026",
      events: [
        { time: "07:30 AM - 08:30 AM", title: "Contestant Seating & Security Verification", desc: "No electronic items allowed beyond security desk" },
        { time: "09:00 AM - 02:00 PM", title: "ICPC Asia Dhaka Regional Contest (Main)", desc: "5-hour intensive algorithmic coding session" },
        { time: "02:30 PM - 04:00 PM", title: "Lunches & Networking Walk", desc: "Green Lake Garden Zone" },
        { time: "04:30 PM - 06:30 PM", title: "Problem Discussion, Closing & Award Ceremony", desc: "Main Auditorium Hall" },
      ],
    },
  ];

  const languages = [
    { name: "C++", version: "GCC 13.x (with C++20)", flags: "-O3 -march=native" },
    { name: "C", version: "GCC 13.x (with C17)", flags: "-O3" },
    { name: "Java", version: "OpenJDK 21", flags: "-XX:+UseSerialGC -Xss64m -Xms2048m -Xmx2048m" },
    { name: "Python 3", version: "Python 3.12 (PyPy3)", flags: "Runs using standard interpreter" },
    { name: "Kotlin", version: "Kotlin 1.9", flags: "-compiler-options" },
  ];

  const editors = ["VS Code", "Vim / Neovim", "CLike Editors", "IntelliJ IDEA", "PyCharm", "Eclipse", "Code::Blocks"];

  return (
    <div className="relative w-full py-16 lg:py-24">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[100px] dark:bg-brand-blue/5"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-brand-red/10 blur-[100px] dark:bg-brand-red/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Contest Operations</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Rules, Environment & Schedule
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Everything you need to know about the regional rules, compiler environment details, schedule, and venue routing maps.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "rules", label: "Rules & Guidelines", icon: <BookOpen size={16} /> },
            { id: "env", label: "Environment & Languages", icon: <Terminal size={16} /> },
            { id: "schedule", label: "Schedule Timeline", icon: <Clock size={16} /> },
            { id: "venue", label: "Venue & Maps", icon: <MapPin size={16} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                  : "glass text-slate-700 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic content rendering */}
        <div className="min-h-[400px]">
          
          {/* RULES TAB */}
          {activeTab === "rules" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {rulesData.map((rule, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-sm shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{rule.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* ENVIRONMENT TAB */}
          {activeTab === "env" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10 max-w-5xl mx-auto"
            >
              {/* Hardware Spec Panel */}
              <div className="glass p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-brand-blue/20">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Monitor className="text-brand-blue" />
                    <span>Workstation Hardware Details</span>
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    Each team workstation will be equipped with high-performance desktop terminals configured with Ubuntu Desktop OS, running standard testing tools.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-350">
                    <li className="flex items-center gap-2">
                      <Cpu size={16} className="text-brand-gold" />
                      <span>Processor: Intel Core i7-12700 / AMD Ryzen 7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-emerald-500" />
                      <span>RAM: 16 GB DDR4 Dual-Channel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-emerald-500" />
                      <span>Operating System: Ubuntu LTS 24.04 Desktop</span>
                    </li>
                  </ul>
                </div>
                {/* Code Editor selection */}
                <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">Available Code Editors</h4>
                  <div className="flex flex-wrap gap-2">
                    {editors.map((editor, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-xs font-semibold shadow-sm text-slate-700 dark:text-slate-300">
                        {editor}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-4 italic">
                    * Compilers and editors will be pre-installed. No active internet connection will be available.
                  </p>
                </div>
              </div>

              {/* Supported Languages Table */}
              <div className="glass rounded-3xl overflow-hidden">
                <div className="px-6 py-5 bg-slate-100/50 dark:bg-slate-800/30 border-b border-slate-200 dark:border-slate-850">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                    <Code className="text-brand-gold" />
                    <span>Compiler Configurations & Flags</span>
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-450 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-900/50">
                        <th className="px-6 py-4">Language</th>
                        <th className="px-6 py-4">Compiler Version</th>
                        <th className="px-6 py-4">Compilation Command / Flags</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 dark:divide-slate-800 text-sm">
                      {languages.map((lang, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                          <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{lang.name}</td>
                          <td className="px-6 py-4 text-slate-600 dark:text-slate-350">{lang.version}</td>
                          <td className="px-6 py-4 font-mono text-xs text-brand-blue">{lang.flags}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* SCHEDULE TIMELINE */}
          {activeTab === "schedule" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12 max-w-4xl mx-auto"
            >
              {scheduleEvents.map((dayItem, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-brand-gold"></span>
                    <span>{dayItem.day}</span>
                  </h3>
                  <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 space-y-8">
                    {dayItem.events.map((ev, eventIdx) => (
                      <div key={eventIdx} className="relative">
                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-brand-dark"></div>
                        <div className="glass p-5 rounded-xl hover:border-brand-blue/30 transition-all">
                          <span className="text-xs font-mono font-bold text-brand-blue block mb-1">{ev.time}</span>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{ev.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{ev.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* VENUE TAB */}
          {activeTab === "venue" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center"
            >
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">IUBAT Green Campus Venue</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  The contest will take place in the computing complex located in the Central Academic Building, IUBAT. The campus is located in Uttara, Dhaka, offering easy road connectivity to international airports and hotels.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="text-brand-red shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">Official Address</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">4 Embankment Drive Road, Sector 10, Uttara, Dhaka 1230</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Monitor className="text-brand-blue shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">Computer Lab Halls</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Labs 102, 104, 201, 203 (Central Computing Wing)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="glass h-80 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center p-6 text-center bg-slate-100 dark:bg-slate-900/50">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-gold/10 opacity-30"></div>
                <MapPin size={48} className="text-brand-red mb-4 animate-bounce" />
                <h4 className="font-bold text-slate-950 dark:text-white text-sm relative z-10">Google Map Placeholder</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs relative z-10">
                  Interactive map will load showing driving directions from Hazrat Shahjalal International Airport (HSIA).
                </p>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
}
