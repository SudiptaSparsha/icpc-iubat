"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";

export default function RegisteredTeamsPage() {
  const allTeams = [
    { id: 1, name: "IUBAT_Loopers", uni: "IUBAT", coach: "Mr. Rashedul Islam", members: "Karim, Rahim, Asif", status: "Accepted" },
    { id: 2, name: "DU_Hackers", uni: "University of Dhaka", coach: "Dr. Mamun", members: "Shakil, Fahim, Tanvir", status: "Accepted" },
    { id: 3, name: "BUET_Coders", uni: "BUET", coach: "Prof. Kaykobad", members: "Anis, Sudipto, Joy", status: "Accepted" },
    { id: 4, name: "SUST_Core", uni: "SUST", coach: "Dr. Zafar", members: "Shuvo, Nabil, Himel", status: "Pending" },
    { id: 5, name: "NSU_Cyber", uni: "North South University", coach: "Dr. Shafi", members: "Zahid, Raisa, Farhan", status: "Under Review" },
    { id: 6, name: "IUBAT_Gladiators", uni: "IUBAT", coach: "Farhana Haque", members: "Rian, Sadia, Mizan", status: "Accepted" },
    { id: 7, name: "BRAC_Matrix", uni: "BRAC University", coach: "Dr. Sadia", members: "Nafis, Abrar, Faria", status: "Pending" },
    { id: 8, name: "RU_Knights", uni: "Rajshahi University", coach: "Dr. Shamim", members: "Noman, Pavel, Emon", status: "Accepted" },
    { id: 9, name: "CU_Binary", uni: "Chittagong University", coach: "Dr. Hanif", members: "Kazi, Riad, Joya", status: "Under Review" },
    { id: 10, name: "MIST_Null", uni: "MIST", coach: "Maj. Tareq", members: "Sakib, Alif, Tamim", status: "Accepted" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter Logic
  const filteredTeams = allTeams.filter((team) => {
    const matchesSearch =
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.uni.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.coach.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.members.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || team.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredTeams.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTeams = filteredTeams.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="relative w-full py-16 lg:py-24">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[110px] dark:bg-brand-blue/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">Registered Teams</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Registered Teams Directory
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Real-time tracking of preliminary registered teams. Search by team name, institution, coach name, or contestant.
          </p>
        </div>

        {/* Filter controls bar */}
        <div className="glass p-6 rounded-2xl mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search teams, universities, coaches..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
            />
          </div>

          {/* Status filters */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Filter size={18} className="text-slate-400 shrink-0" />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-slate-55 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue w-full md:w-auto"
            >
              <option value="all">All Statuses</option>
              <option value="Accepted">Accepted</option>
              <option value="Pending">Pending</option>
              <option value="Under Review">Under Review</option>
            </select>
          </div>

        </div>

        {/* Table Area */}
        <div className="glass rounded-3xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-400 uppercase bg-slate-50 dark:bg-slate-900/50">
                  <th className="px-6 py-4">Team Name</th>
                  <th className="px-6 py-4">Institution</th>
                  <th className="px-6 py-4">Coach</th>
                  <th className="px-6 py-4">Contestants</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 dark:divide-slate-800 text-sm">
                {paginatedTeams.length > 0 ? (
                  paginatedTeams.map((team) => (
                    <tr key={team.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{team.name}</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-350">{team.uni}</td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-350">{team.coach}</td>
                      <td className="px-6 py-4 text-slate-500 dark:text-slate-400 font-mono text-xs">{team.members}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                          team.status === "Accepted"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
                            : team.status === "Pending"
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400"
                        }`}>
                          {team.status === "Accepted" && <CheckCircle2 size={12} />}
                          {team.status === "Pending" && <AlertCircle size={12} />}
                          {team.status === "Under Review" && <HelpCircle size={12} />}
                          <span>{team.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-10 text-slate-400">
                      No teams matched your query.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center text-sm font-semibold text-slate-500">
            <span>Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredTeams.length)} of {filteredTeams.length} teams</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 disabled:opacity-50 text-slate-700 dark:text-slate-300 font-bold"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-9 h-9 rounded-lg font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 disabled:opacity-50 text-slate-700 dark:text-slate-300 font-bold"
              >
                Next
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
