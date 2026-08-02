"use client";
import React from "react";
import Navbar from "../../components/Navbar";

export default function CategoriesPage() {
  const categories = [
    {
      title: "Sanitation & Waste",
      badge: "Cleanliness",
      desc: "Garbage collection delays, open sewage, uncleaned streets, and public hygiene issues.",
      action: "File Complaint in Sanitation & Waste →",
      bg: "bg-amber-50/40",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Roads & Infrastructure",
      badge: "Infrastructure",
      desc: "Potholes, non-functional streetlights, waterlogging, footpaths, and damaged water pipes.",
      action: "File Complaint in Roads & Infrastructure →",
      bg: "bg-indigo-50/40",
      img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Education & Schools",
      badge: "Education",
      desc: "Teacher absenteeism, poor school infrastructure, lack of drinking water, and scholarship delays.",
      action: "File Complaint in Education & Schools →",
      bg: "bg-emerald-50/40",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Administration & Corruption",
      badge: "Governance",
      desc: "Bribery, administrative delays, rude behavior, certificate issuance delays, and graft.",
      action: "File Complaint in Administration & Corruption →",
      bg: "bg-purple-50/40",
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Public Safety & Community",
      badge: "Community",
      desc: "Noise pollution, illegal construction, stray animal menace, and park maintenance.",
      action: "File Complaint in Public Safety & Community →",
      bg: "bg-orange-50/40",
      img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF7] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-10 w-full space-y-8">
        <div>
          <span className="bg-orange-100/70 border border-orange-200 text-[#FF5722] px-3.5 py-1 rounded-full text-xs font-bold">
            + Select Issue Area
          </span>
          <h1 className="text-4xl font-black text-[#1A237E] mt-3">Categories</h1>
          <p className="text-xs text-slate-500 font-medium">Choose a category below to initiate an AI-guided complaint draft for your local authority.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className={`${cat.bg} border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm space-y-4 flex flex-col justify-between p-2`}>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {cat.badge}
                </span>
              </div>
              <div className="px-3 pb-3 space-y-2">
                <h3 className="font-bold text-slate-800 text-base">{cat.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                <button className="text-xs font-bold text-[#FF5722] pt-2 block hover:underline">
                  {cat.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
