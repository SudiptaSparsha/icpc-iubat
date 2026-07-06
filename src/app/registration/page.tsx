"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  User, 
  Users, 
  CreditCard, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle,
  GraduationCap
} from "lucide-react";

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Coach
    coachName: "",
    coachEmail: "",
    coachPhone: "",
    coachUni: "",
    // Team
    teamName: "",
    teamUni: "",
    // Contestant 1
    c1Name: "",
    c1Email: "",
    c1Phone: "",
    c1TShirt: "M",
    // Contestant 2
    c2Name: "",
    c2Email: "",
    c2Phone: "",
    c2TShirt: "L",
    // Contestant 3
    c3Name: "",
    c3Email: "",
    c3Phone: "",
    c3TShirt: "XL",
    // Payment
    payMethod: "bkash",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="relative w-full py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] rounded-full bg-brand-blue/10 blur-[120px] dark:bg-brand-blue/5"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] rounded-full bg-brand-gold/10 blur-[120px] dark:bg-brand-gold/5"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Team Registration</span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Asia Dhaka Regional Registration
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Complete the 5-step form to register your university team for the preliminary round.
          </p>
        </div>

        {/* Step Indicator Progress Bar */}
        {!submitted && (
          <div className="mb-12">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              <span>Step {step} of 5</span>
              <span>
                {step === 1 && "Coach Information"}
                {step === 2 && "Team Details"}
                {step === 3 && "Contestant Information"}
                {step === 4 && "Payment Selection"}
                {step === 5 && "Review & Submit"}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-blue transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Multi-Step Card */}
        <div className="glass p-8 sm:p-10 rounded-3xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              // Success Screen
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                  Registration Submitted!
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you! Your team registration has been successfully received. We have sent a confirmation email to the coach: <strong className="text-slate-800 dark:text-slate-200">{formData.coachEmail}</strong>.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => window.print()}
                    className="px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-indigo text-white font-bold transition-all shadow-md"
                  >
                    Print Summary
                  </button>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-3 rounded-xl glass hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-850 dark:text-white font-bold"
                  >
                    Register Another Team
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* STEP 1: COACH */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                      <User className="text-brand-blue" />
                      <span>Step 1: Coach Information</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                        <input
                          type="text"
                          name="coachName"
                          required
                          value={formData.coachName}
                          onChange={handleChange}
                          placeholder="e.g. Dr. John Doe"
                          className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Official Email Address</label>
                        <input
                          type="email"
                          name="coachEmail"
                          required
                          value={formData.coachEmail}
                          onChange={handleChange}
                          placeholder="e.g. coach@university.edu"
                          className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                        <input
                          type="text"
                          name="coachPhone"
                          required
                          value={formData.coachPhone}
                          onChange={handleChange}
                          placeholder="e.g. +880-1700-000000"
                          className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">University / Institution</label>
                        <input
                          type="text"
                          name="coachUni"
                          required
                          value={formData.coachUni}
                          onChange={handleChange}
                          placeholder="e.g. IUBAT University"
                          className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: TEAM */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                      <Users className="text-brand-gold" />
                      <span>Step 2: Team Details</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">Team Name</label>
                        <input
                          type="text"
                          name="teamName"
                          required
                          value={formData.teamName}
                          onChange={handleChange}
                          placeholder="e.g. Code_Commanders"
                          className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-slate-500 uppercase">University Name (Affiliation)</label>
                        <input
                          type="text"
                          name="teamUni"
                          required
                          value={formData.teamUni}
                          onChange={handleChange}
                          placeholder="e.g. IUBAT University"
                          className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: CONTESTANTS */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-8"
                  >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                      <GraduationCap className="text-brand-red" />
                      <span>Step 3: Team Contestants Details</span>
                    </h3>

                    {/* Contestant 1 */}
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 space-y-4">
                      <h4 className="font-bold text-sm text-brand-blue uppercase">Contestant 1 (Lead / Contact)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <input
                          type="text"
                          name="c1Name"
                          required
                          value={formData.c1Name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="md:col-span-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue"
                        />
                        <input
                          type="email"
                          name="c1Email"
                          required
                          value={formData.c1Email}
                          onChange={handleChange}
                          placeholder="Email"
                          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue"
                        />
                        <select
                          name="c1TShirt"
                          value={formData.c1TShirt}
                          onChange={handleChange}
                          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue"
                        >
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </select>
                      </div>
                    </div>

                    {/* Contestant 2 */}
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 space-y-4">
                      <h4 className="font-bold text-sm text-brand-gold uppercase">Contestant 2</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <input
                          type="text"
                          name="c2Name"
                          required
                          value={formData.c2Name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="md:col-span-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue"
                        />
                        <input
                          type="email"
                          name="c2Email"
                          required
                          value={formData.c2Email}
                          onChange={handleChange}
                          placeholder="Email"
                          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue"
                        />
                        <select
                          name="c2TShirt"
                          value={formData.c2TShirt}
                          onChange={handleChange}
                          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue"
                        >
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </select>
                      </div>
                    </div>

                    {/* Contestant 3 */}
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 space-y-4">
                      <h4 className="font-bold text-sm text-brand-red uppercase">Contestant 3</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <input
                          type="text"
                          name="c3Name"
                          required
                          value={formData.c3Name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="md:col-span-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue"
                        />
                        <input
                          type="email"
                          name="c3Email"
                          required
                          value={formData.c3Email}
                          onChange={handleChange}
                          placeholder="Email"
                          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue"
                        />
                        <select
                          name="c3TShirt"
                          value={formData.c3TShirt}
                          onChange={handleChange}
                          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue"
                        >
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                        </select>
                      </div>
                    </div>

                  </motion.div>
                )}

                {/* STEP 4: PAYMENT */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                      <CreditCard className="text-brand-indigo" />
                      <span>Step 4: Registration Fee & Payment Gateway</span>
                    </h3>
                    
                    <div className="p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/15 mb-6">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Summary of Fees</h4>
                      <div className="flex justify-between items-center mt-3 text-sm text-slate-600 dark:text-slate-350">
                        <span>Preliminary Registration Fee</span>
                        <span className="font-bold text-slate-950 dark:text-white">BDT 300.00</span>
                      </div>
                      <div className="flex justify-between items-center mt-2 text-sm text-slate-600 dark:text-slate-350">
                        <span>Processing Fee</span>
                        <span className="font-bold text-slate-950 dark:text-white">BDT 0.00</span>
                      </div>
                      <div className="flex justify-between items-center mt-4 border-t border-slate-200 dark:border-slate-800 pt-4 text-base font-extrabold text-slate-900 dark:text-white">
                        <span>Total Payable</span>
                        <span className="text-brand-blue">BDT 300.00</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold text-slate-500 uppercase mb-2">Select Payment Method</label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { id: "bkash", name: "bKash" },
                          { id: "nagad", name: "Nagad" },
                          { id: "card", name: "SSLCOMMERZ (Cards)" },
                        ].map((method) => (
                          <label
                            key={method.id}
                            className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                              formData.payMethod === method.id
                                ? "border-brand-blue bg-brand-blue/10 text-brand-blue"
                                : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/30"
                            }`}
                          >
                            <input
                              type="radio"
                              name="payMethod"
                              value={method.id}
                              checked={formData.payMethod === method.id}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span className="text-sm font-bold">{method.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: REVIEW */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      Step 5: Review & Submit
                    </h3>

                    <div className="divide-y divide-slate-150 dark:divide-slate-800 text-sm space-y-4">
                      {/* Coach Review */}
                      <div className="pt-2">
                        <h4 className="font-extrabold text-brand-blue text-xs uppercase mb-2">Coach Details</h4>
                        <p className="text-slate-600 dark:text-slate-350">
                          {formData.coachName} ({formData.coachEmail}) — {formData.coachUni}
                        </p>
                      </div>

                      {/* Team Review */}
                      <div className="pt-4">
                        <h4 className="font-extrabold text-brand-gold text-xs uppercase mb-2">Team Details</h4>
                        <p className="text-slate-600 dark:text-slate-350">
                          <strong className="text-slate-900 dark:text-white">{formData.teamName}</strong> — Affiliated: {formData.teamUni}
                        </p>
                      </div>

                      {/* Contestants Review */}
                      <div className="pt-4">
                        <h4 className="font-extrabold text-brand-red text-xs uppercase mb-2">Contestants</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-350">
                          <li>{formData.c1Name} ({formData.c1TShirt})</li>
                          <li>{formData.c2Name} ({formData.c2TShirt})</li>
                          <li>{formData.c3Name} ({formData.c3TShirt})</li>
                        </ul>
                      </div>

                      {/* Payment Review */}
                      <div className="pt-4 pb-2">
                        <h4 className="font-extrabold text-brand-indigo text-xs uppercase mb-2">Payment Details</h4>
                        <p className="text-slate-600 dark:text-slate-350">
                          Payable BDT 300.00 via {formData.payMethod.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-200 dark:border-slate-800">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-5 py-3 rounded-xl glass hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-850 dark:text-white font-bold flex items-center gap-2"
                    >
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-indigo text-white font-bold flex items-center gap-2 shadow-lg shadow-brand-blue/20"
                    >
                      <span>Continue</span>
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-blue text-white font-black flex items-center gap-2 shadow-xl shadow-brand-blue/30"
                    >
                      <span>Submit & Confirm</span>
                    </button>
                  )}
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
