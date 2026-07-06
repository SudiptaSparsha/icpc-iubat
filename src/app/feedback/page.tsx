"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart, 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  CheckCircle2, 
  Send 
} from "lucide-react";

export default function FeedbackPage() {
  const [ratings, setRatings] = useState({
    venue: 5,
    food: 4,
    stability: 5,
    communication: 4,
  });

  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Seeded poll data
  const [pollVotes, setPollVotes] = useState({
    Cpp: 185,
    Python: 42,
    Java: 28,
    Kotlin: 12,
  });

  const handleVote = (lang: "Cpp" | "Python" | "Java" | "Kotlin") => {
    if (!preferredLanguage) {
      setPreferredLanguage(lang);
      setPollVotes({
        ...pollVotes,
        [lang]: pollVotes[lang] + 1,
      });
    }
  };

  const totalVotes = pollVotes.Cpp + pollVotes.Python + pollVotes.Java + pollVotes.Kotlin;

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative w-full py-16 lg:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-gold/10 blur-[110px] dark:bg-brand-gold/5"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[110px] dark:bg-brand-blue/5"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Community Voice</span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Vote & Share Feedback
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Submit ratings, participate in polls, and help us improve future regional events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* FEEDBACK & RATING FORM */}
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
              <MessageSquare className="text-brand-blue" size={20} />
              <span>Event Rating & Suggestions</span>
            </h3>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Thank You for Your Feedback!</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-xs leading-relaxed">
                    Your ratings and suggestions have been recorded to help the IUBAT organizing committee.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSuggestion("");
                    }}
                    className="mt-6 px-5 py-2 rounded-lg bg-brand-blue text-white text-xs font-bold shadow-md"
                  >
                    Submit New Feedback
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmitFeedback} className="space-y-6">
                  {/* Venue Rating */}
                  {[
                    { key: "venue", label: "Venue & Campus Quality" },
                    { key: "food", label: "Catering & Lunches" },
                    { key: "stability", label: "PC^2 Server Stability" },
                    { key: "communication", label: "Organizer Assistance" },
                  ].map((item) => (
                    <div key={item.key} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500">
                        <span>{item.label}</span>
                        <span className="text-brand-blue font-mono font-bold">
                          {ratings[item.key as keyof typeof ratings]} / 5
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={ratings[item.key as keyof typeof ratings]}
                        onChange={(e) => setRatings({ ...ratings, [item.key]: parseInt(e.target.value) })}
                        className="w-full accent-brand-blue"
                      />
                    </div>
                  ))}

                  {/* Suggestion Text */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Suggestions / Recommendations</label>
                    <textarea
                      rows={4}
                      value={suggestion}
                      onChange={(e) => setSuggestion(e.target.value)}
                      placeholder="Share your experience or suggestions for next year..."
                      required
                      className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-blue text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20"
                  >
                    <Send size={16} />
                    <span>Submit Feedback</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* POLL & CHARTS */}
          <div className="glass p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
                <BarChart className="text-brand-gold" size={20} />
                <span>Preferred Contest Language Poll</span>
              </h3>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Cast your vote for the primary language you prefer to write solutions in during contest practice.
              </p>

              <div className="space-y-4">
                {[
                  { id: "Cpp", name: "C++ (GCC 20)" },
                  { id: "Python", name: "Python 3 / PyPy" },
                  { id: "Java", name: "Java (OpenJDK 21)" },
                  { id: "Kotlin", name: "Kotlin 1.9" },
                ].map((item) => {
                  const votes = pollVotes[item.id as keyof typeof pollVotes];
                  const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
                  const voted = preferredLanguage === item.id;
                  
                  return (
                    <div 
                      key={item.id}
                      onClick={() => handleVote(item.id as any)}
                      className={`p-4 rounded-xl border cursor-pointer relative overflow-hidden transition-all ${
                        preferredLanguage
                          ? "pointer-events-none"
                          : "hover:bg-slate-50 dark:hover:bg-slate-900/30"
                      } ${
                        voted ? "border-brand-blue" : "border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      {/* Percent Fill Bar */}
                      <div 
                        className="absolute inset-y-0 left-0 bg-brand-blue/10 dark:bg-brand-blue/15 transition-all duration-500"
                        style={{ width: preferredLanguage ? `${percentage}%` : "0%" }}
                      ></div>
                      
                      <div className="relative z-10 flex justify-between items-center text-sm font-bold">
                        <span className={voted ? "text-brand-blue" : "text-slate-900 dark:text-white"}>
                          {item.name}
                        </span>
                        {preferredLanguage && (
                          <span className="font-mono text-xs text-slate-500">
                            {votes} votes ({percentage}%)
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {preferredLanguage && (
              <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 font-semibold flex items-center justify-center gap-2">
                <ThumbsUp size={14} className="text-brand-blue" />
                <span>Thank you! Your vote for {preferredLanguage === "Cpp" ? "C++" : preferredLanguage} has been counted.</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
