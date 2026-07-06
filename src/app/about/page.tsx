"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, ShieldAlert, GraduationCap, Map, Users, Clock, Image as ImageIcon } from "lucide-react";

export default function AboutPage() {
  const committee = [
    {
      role: "Chief Patron",
      name: "Prof. Dr. M. Alimur Rahman",
      title: "Vice Chancellor, IUBAT",
      imgColor: "from-brand-blue/30 to-brand-indigo/30",
    },
    {
      role: "Chairperson",
      name: "Prof. Dr. Utpal Kanti Das",
      title: "Dean, CSE Department, IUBAT",
      imgColor: "from-brand-gold/30 to-brand-indigo/30",
    },
    {
      role: "Contest Director",
      name: "Dr. Selim Habib",
      title: "Professor of CSE, IUBAT",
      imgColor: "from-brand-red/30 to-brand-blue/30",
    },
    {
      role: "Contest Co-Director",
      name: "Prof. Farhana Haque",
      title: "Associate Professor, IUBAT",
      imgColor: "from-brand-indigo/30 to-brand-gold/30",
    },
    {
      role: "Chief Coordinator",
      name: "Mr. Rashedul Islam",
      title: "Assistant Professor, IUBAT",
      imgColor: "from-brand-blue/30 to-brand-red/30",
    },
  ];

  const timelineEvents = [
    {
      year: "2026",
      title: "IUBAT Host",
      desc: "Selected as official host for the ICPC Asia Dhaka Regional Final. Launching state-of-the-art lab and facilities.",
    },
    {
      year: "2024",
      title: "DHAKA REGIONAL TOP 5",
      desc: "IUBAT programming team placed 5th in the national preliminary, representing outstanding competitive growth.",
    },
    {
      year: "2022",
      title: "CO-HOSTING PARTICIPATION",
      desc: "Contributed server structures and judging volunteers to assist regional judging panel systems.",
    },
    {
      year: "1997",
      title: "FOUNDING INSPIRATION",
      desc: "Dhaka Regional initiated in Bangladesh. Over 30 years of competitive algorithm legacy begins.",
    },
  ];

  const [activeTab, setActiveTab] = useState<"icpc" | "iubat">("icpc");

  return (
    <div className="relative w-full py-16 lg:py-24">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-gold/10 blur-[120px] dark:bg-brand-gold/5"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-brand-blue/10 blur-[120px] dark:bg-brand-blue/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">History & Leadership</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            About the Contest & Host
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Learn about the International Collegiate Programming Contest, our hosting institution IUBAT, and the organizing committee.
          </p>
        </div>

        {/* Tab switcher for ICPC/IUBAT */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex gap-2 glass">
            <button
              onClick={() => setActiveTab("icpc")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "icpc"
                  ? "bg-brand-blue text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              About ICPC
            </button>
            <button
              onClick={() => setActiveTab("iubat")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "iubat"
                  ? "bg-brand-blue text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              About IUBAT
            </button>
          </div>
        </div>

        {/* Dynamic Detail Card */}
        <div className="mb-24">
          {activeTab === "icpc" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex p-3 rounded-2xl bg-brand-blue/10 text-brand-blue mb-6">
                  <Award size={28} />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                  International Collegiate Programming Contest (ICPC)
                </h2>
                <p className="text-slate-600 dark:text-slate-350 leading-relaxed mb-4">
                  The ICPC is the premiere global competitive programming competition of, by, and for the world's universities. It is an algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure.
                </p>
                <p className="text-slate-600 dark:text-slate-350 leading-relaxed">
                  Through training and competition, teams challenge themselves to learn, build and collaborate. It is the oldest, largest, and most prestigious programming contest in the world.
                </p>
              </div>
              <div className="glass p-8 rounded-3xl bg-gradient-to-br from-brand-indigo/10 via-brand-blue/5 to-transparent border-brand-blue/20">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-xl mb-4">Contest Values</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Teamwork", desc: "Teams of three share a single workstation to solve algorithmic challenges." },
                    { title: "Skill Development", desc: "Develops deep problem-solving skills under time-bound pressure." },
                    { title: "Global Network", desc: "Connects students with top academic researchers and leading tech employers." },
                  ].map((val, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{val.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{val.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex p-3 rounded-2xl bg-brand-gold/10 text-brand-gold mb-6">
                  <GraduationCap size={28} />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                  IUBAT University Host Campus
                </h2>
                <p className="text-slate-600 dark:text-slate-350 leading-relaxed mb-4">
                  Founded in 1991, International University of Business Agriculture and Technology (IUBAT) is the first non-government university in Bangladesh. With its vision to produce globally qualified graduates, IUBAT offers a sustainable and beautiful green campus.
                </p>
                <p className="text-slate-600 dark:text-slate-350 leading-relaxed">
                  The campus provides advanced technical computing laboratories, a fast-fiber infrastructure, judging panel operations rooms, and beautiful resting lake walkways designed specifically to host large-scale computing championships.
                </p>
              </div>
              <div className="glass p-8 rounded-3xl bg-gradient-to-br from-brand-gold/10 via-brand-blue/5 to-transparent border-brand-gold/20">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-xl mb-4">Host Campus Facilities</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Advanced Computing Labs", desc: "Over 500 high-specification desktop computers equipped with official testing tools." },
                    { title: "Lake-Side Campus Area", desc: "Green environment providing a refreshing atmosphere for relaxation between coding hours." },
                    { title: "Auditorium & Halls", desc: "Massive hosting halls for preliminary briefings, registration desks, and closing award gala." },
                  ].map((val, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{val.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{val.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>

        {/* ORGANIZING COMMITTEE */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
              Organizing Committee
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              The dedicated academic leadership driving the success of the Asia Dhaka Regional Contest at IUBAT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {committee.map((member, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-20 h-20 rounded-full mx-auto bg-gradient-to-tr ${member.imgColor} flex items-center justify-center text-white mb-4 shadow`}>
                    <Users size={32} />
                  </div>
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest block mb-1">
                    {member.role}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">
                    {member.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 border-t border-slate-100 dark:border-slate-800 pt-3">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2 justify-center">
              <Clock size={28} className="text-brand-blue" />
              <span>Contest Timeline & Legacy</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              A brief tracking history of the Dhaka Regional contests and IUBAT's involvement.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 space-y-12">
            {timelineEvents.map((ev, idx) => (
              <div key={idx} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-brand-dark border-4 border-brand-blue z-10 flex items-center justify-center"></div>
                <div className="glass p-6 rounded-2xl hover:border-brand-blue/30 transition-all duration-300">
                  <span className="font-mono text-lg font-black text-brand-blue block mb-1">{ev.year}</span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{ev.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2 justify-center">
              <ImageIcon size={28} className="text-brand-gold" />
              <span>Campus & Event Gallery</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Glimpses of previous coding hackathons, coding workstations, and IUBAT's natural scenery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Lab Center Alpha", color: "from-brand-blue/20 to-brand-indigo/30" },
              { label: "Opening Ceremony Hall", color: "from-brand-gold/20 to-brand-indigo/30" },
              { label: "Lake Walkway", color: "from-brand-red/20 to-brand-blue/30" },
              { label: "Workstation Setup", color: "from-brand-indigo/20 to-brand-gold/30" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="group relative h-48 rounded-xl overflow-hidden glass flex flex-col justify-end p-4 hover:shadow-lg transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-tr ${img.color} flex items-center justify-center`}>
                  <span className="text-[10px] font-mono text-slate-400/80">IMAGE PLACEHOLDER</span>
                </div>
                <div className="relative z-10 bg-slate-900/80 p-2.5 rounded-lg text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.label}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
