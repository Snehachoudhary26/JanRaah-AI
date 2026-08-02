"use client";
import React from "react";
import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF7] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-12 w-full space-y-12 text-center">
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="bg-orange-100/70 border border-orange-200 text-[#FF5722] px-3.5 py-1 rounded-full text-xs font-bold">
            + Empowering Citizens
          </span>
          <h1 className="text-4xl font-black text-[#1A237E]">About JanSeva AI</h1>
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            JanSeva AI is an independent, AI-driven civic platform built to empower everyday citizens of India to voice public grievances, file RTI applications, and connect directly with local government authorities.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-orange-100 mx-auto flex items-center justify-center text-lg">🎯</div>
            <h3 className="font-bold text-slate-800 text-sm">Our Mission</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Bridge the gap between Indian citizens and municipal authorities using intelligent AI automation.</p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-indigo-100 mx-auto flex items-center justify-center text-lg">⚡</div>
            <h3 className="font-bold text-slate-800 text-sm">Instant Drafts</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Transform simple voice or text complaints into legal, structured RTI and grievance drafts in seconds.</p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-emerald-100 mx-auto flex items-center justify-center text-lg">🤝</div>
            <h3 className="font-bold text-slate-800 text-sm">100% Free & Open</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Built as a public utility to ensure civic empowerment is accessible to everyone across India.</p>
          </div>
        </div>

        {/* Creator Section */}
        <div className="space-y-6 pt-6">
          <div>
            <h2 className="text-2xl font-black text-[#1A237E]">Creator & Founder</h2>
            <p className="text-xs text-slate-500 font-medium">An individual initiative built with passion for civic governance</p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 max-w-md mx-auto shadow-sm space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-black text-xl flex items-center justify-center mx-auto shadow-md">
              SC
            </div>
            <div>
              <h3 className="font-black text-slate-800 text-lg">Sneha Choudhary</h3>
              <p className="text-xs font-bold text-[#FF5722]">Founder, Lead Developer & Designer</p>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Designed and developed JanSeva AI independently to leverage modern AI tools to bring accountability and simplicity to public grievance redressal in India.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
