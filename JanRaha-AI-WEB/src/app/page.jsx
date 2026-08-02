"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFBF7] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-10 w-full space-y-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-orange-100/70 border border-orange-200 text-[#FF5722] px-3.5 py-1 rounded-full text-xs font-extrabold">
              <span>✦ AI-Powered Civic Assistant for India</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-black text-[#1A237E] font-serif leading-[1.15]">
              Stronger Citizens. <br />
              <span className="text-[#FF5722] italic font-serif">Stronger India.</span>
            </h1>

            <p className="text-sm text-slate-600 font-medium max-w-lg leading-relaxed">
              Report any civic issue in your area and JanSeva AI will find the right department, officer & create a legal RTI / complaint draft in minutes.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs px-6 py-3.5 rounded-2xl shadow-lg shadow-orange-500/20 transition flex items-center gap-2">
                ✏️ Report an Issue
              </button>
              <button className="bg-white border border-slate-200 text-[#1A237E] hover:border-[#FF5722] font-bold text-xs px-6 py-3.5 rounded-2xl shadow-sm transition flex items-center gap-2">
                🎙️ Voice Input
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs font-bold text-slate-500">
              <span>✓ 100% Free</span>
              <span>✦ AI-Powered</span>
              <span>📍 Pan-India</span>
              <span>🔒 Secure & Private</span>
            </div>
          </div>

          {/* Right Hero Container */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-amber-200/60 shadow-2xl bg-amber-100/40 p-3 relative">
              <div className="bg-slate-800 rounded-2xl min-h-[380px] relative overflow-hidden flex flex-col justify-end p-6">
                <img 
                  src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1000&q=80" 
                  alt="Gram Panchayat" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                
                {/* Embedded Prompt Box */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Tell us your issue...</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">AI Online</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-center justify-between text-xs text-slate-400">
                    <span>Example: Garbage not collected in my area for 5 days</span>
                    <button className="w-7 h-7 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold">🎙️</button>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                      <button className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl hover:bg-slate-200 transition">📷 Upload Photo</button>
                      <button className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl hover:bg-slate-200 transition">📍 Select Location</button>
                    </div>
                    <button className="bg-[#1A237E] hover:bg-indigo-900 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md transition">
                      Generate Draft +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-[#1A237E]">Report Issue By Category</h2>
              <p className="text-xs text-slate-500 font-medium">Select a category to quickly draft a localized complaint</p>
            </div>
            <Link href="/categories" className="text-xs font-bold text-[#FF5722] hover:underline">View All →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-4 space-y-3">
              <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center text-lg">🗑️</div>
              <h3 className="font-bold text-slate-800 text-sm">Sanitation & Waste</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">Garbage, sewage, dirty streets, waste collection issues</p>
              <button className="text-xs font-bold text-rose-600">Report Now →</button>
            </div>

            <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-4 space-y-3">
              <div className="w-10 h-10 rounded-full bg-indigo-900 text-white flex items-center justify-center text-lg">🛣️</div>
              <h3 className="font-bold text-slate-800 text-sm">Roads & Infrastructure</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">Potholes, streetlights, waterlogging, footpaths, broken pipes</p>
              <button className="text-xs font-bold text-indigo-700">Report Now →</button>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4 space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-lg">🏥</div>
              <h3 className="font-bold text-slate-800 text-sm">Healthcare & Hospitals</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">Rude staff, absent doctors, lack of medicines, poor facilities</p>
              <button className="text-xs font-bold text-emerald-700">Report Now →</button>
            </div>

            <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-4 space-y-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg">🏛️</div>
              <h3 className="font-bold text-slate-800 text-sm">Administration & Corruption</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">Bribery, delays, rude behavior, certificate related issues</p>
              <button className="text-xs font-bold text-purple-700">Report Now →</button>
            </div>

            <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-4 space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-lg">👥</div>
              <h3 className="font-bold text-slate-800 text-sm">Public Safety & Community</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">Noise pollution, illegal activities, stray animals, park maintenance</p>
              <button className="text-xs font-bold text-amber-600">Report Now →</button>
            </div>
          </div>
        </div>

        {/* How JanSeva AI Works */}
        <div id="how-it-works" className="space-y-6 pt-6">
          <h2 className="text-2xl font-black text-[#1A237E] border-b-2 border-amber-500 w-fit pb-1">How JanSeva AI Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">💬</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">1. YOU DESCRIBE</p>
                <p className="text-xs font-semibold text-slate-700">Tell us your issue in simple words</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-sm">🧠</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">2. AI UNDERSTANDS</p>
                <p className="text-xs font-semibold text-slate-700">Our AI identifies category & location</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-sm">🏛️</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">3. FINDS AUTHORITY</p>
                <p className="text-xs font-semibold text-slate-700">We map it to the right department</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-sm">📄</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">4. DRAFTS & GUIDES</p>
                <p className="text-xs font-semibold text-slate-700">AI creates RTI / complaint draft</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
