"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Key, 
  Printer, 
  Download, 
  AlertCircle, 
  ArrowLeft,
  FileCheck
} from "lucide-react";

export default function ConfirmationLetterPage() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const mockTeamData = {
    teamName: "IUBAT_Loopers",
    uni: "IUBAT",
    coach: "Mr. Rashedul Islam",
    contestants: ["Karim Islam", "Rahim Ahmed", "Asifuzzaman"],
    regionalDate: "November 20-21, 2026",
    host: "International University of Business Agriculture and Technology (IUBAT)",
    letterId: "ICPC-2026-DHK-IUBAT-098",
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Allow access using a mock team token 'IUBAT-2026' or just any 4-digit number
    if (token.trim().toUpperCase() === "IUBAT-2026") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid Team Token. Please try 'IUBAT-2026' for demonstration.");
    }
  };

  return (
    <div className="relative w-full py-16 lg:py-24">
      {/* Print Hide container */}
      <div className="print:hidden absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-blue/10 blur-[120px] dark:bg-brand-blue/5"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Hidden on Print */}
        <div className="print:hidden text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Team Invitation</span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Official Confirmation Letter
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Login with your team registration token to view, print, or download your official invitation letter.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isLoggedIn ? (
            // LOGIN FORM
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-md mx-auto glass p-8 rounded-3xl"
            >
              <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                <Key size={22} />
              </div>
              <h2 className="text-center font-bold text-slate-900 dark:text-white text-lg mb-6">
                Enter Team Credentials
              </h2>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Team Registration Token</label>
                  <input
                    type="password"
                    placeholder="Enter Token (e.g. IUBAT-2026)"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    required
                    className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-100/50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-lg text-xs font-semibold flex items-center gap-2">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-blue text-white font-bold text-sm shadow-lg shadow-brand-blue/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Retrieve Letter
                </button>
              </form>
            </motion.div>
          ) : (
            // LETTER PREVIEW
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Toolbar - Hidden on Print */}
              <div className="print:hidden flex justify-between items-center glass p-4 rounded-xl">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5"
                >
                  <ArrowLeft size={14} />
                  <span>Logout</span>
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded-lg bg-brand-blue text-white text-xs font-bold shadow-md hover:bg-brand-indigo transition-colors flex items-center gap-1.5"
                  >
                    <Printer size={14} />
                    <span>Print Letter</span>
                  </button>
                  <button
                    onClick={() => alert("PDF download started! (Demo simulation)")}
                    className="px-4 py-2 rounded-lg glass text-slate-750 dark:text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>

              {/* Invitation Certificate/Letter Container */}
              <div className="bg-white text-slate-900 border border-slate-300 p-10 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden font-serif min-h-[700px] flex flex-col justify-between">
                {/* Watermark Logo balloon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                  <div className="w-[300px] h-[400px] bg-slate-900 rounded-full"></div>
                </div>

                {/* Letter Header */}
                <div className="border-b-2 border-slate-900 pb-6 flex justify-between items-end gap-6">
                  <div>
                    <h3 className="text-xl font-bold tracking-wider font-sans text-brand-indigo">ICPC ASIA DHAKA REGIONAL</h3>
                    <p className="text-xs font-sans text-slate-500 mt-1 uppercase font-semibold">Hosted by IUBAT University</p>
                  </div>
                  <div className="text-right font-sans text-xs text-slate-400">
                    <p>Letter Reference:</p>
                    <p className="font-bold text-slate-800">{mockTeamData.letterId}</p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="my-10 space-y-6 text-sm leading-relaxed text-slate-800">
                  <p>Date: July 06, 2026</p>
                  
                  <p>To,</p>
                  <div className="pl-4 font-sans font-bold text-slate-900">
                    <p>Coach: {mockTeamData.coach}</p>
                    <p>Team: {mockTeamData.teamName}</p>
                    <p>University: {mockTeamData.uni}</p>
                  </div>

                  <p className="font-bold text-base text-slate-950 font-sans my-4">
                    Subject: Invitation to Participate in the 2026 ICPC Asia Dhaka Regional Contest Finals
                  </p>

                  <p>Dear Coach & Team Members,</p>

                  <p>
                    On behalf of the ICPC Asia Dhaka Regional Organizing Committee, we are pleased to inform you that your team <strong className="font-sans text-slate-900">{mockTeamData.teamName}</strong> has been officially accepted to participate in the upcoming Regional Contest hosted by the <strong className="font-sans text-slate-900">{mockTeamData.host}</strong>.
                  </p>

                  <p>
                    The regional final is scheduled to be held on **{mockTeamData.regionalDate}** at the green campus of IUBAT in Uttara, Dhaka. Your team details have been verified as follows:
                  </p>

                  <ul className="list-disc list-inside pl-4 font-sans text-xs text-slate-700 space-y-1">
                    {mockTeamData.contestants.map((con, idx) => (
                      <li key={idx}>Contestant {idx + 1}: {con}</li>
                    ))}
                  </ul>

                  <p>
                    Please ensure that the team reports to the registration counters in the main building by 08:30 AM on Friday, November 20, 2026. The mock contest session is mandatory for all accepted teams.
                  </p>

                  <p className="pt-4">Sincerely,</p>
                </div>

                {/* Signatures */}
                <div className="border-t border-slate-200 pt-8 flex justify-between items-center text-xs font-sans text-slate-500">
                  <div>
                    <div className="h-10 w-24 border-b border-slate-400 mb-2 flex items-center justify-center italic text-slate-400">Signature</div>
                    <p className="font-bold text-slate-800">Prof. Dr. Utpal Kanti Das</p>
                    <p>Chairperson, Organizing Committee</p>
                  </div>
                  <div>
                    <div className="h-10 w-24 border-b border-slate-400 mb-2 flex items-center justify-center italic text-slate-400">Signature</div>
                    <p className="font-bold text-slate-800">Dr. Selim Habib</p>
                    <p>Contest Director, Dhaka Regional</p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
