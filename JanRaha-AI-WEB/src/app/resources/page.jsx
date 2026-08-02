"use client";
import React from "react";
import Navbar from "../../components/Navbar";

export default function ResourcesPage() {
  const resources = [
    {
      title: "RTI Guide",
      badge: "RTI Act 2005",
      desc: "Learn how to file RTI applications effectively to get transparent answers from government departments.",
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Citizen Rights",
      badge: "Civic Awareness",
      desc: "Know your fundamental rights as a citizen under municipal and civic governance laws.",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Government Schemes",
      badge: "Welfare",
      desc: "Explore public welfare schemes for rural and urban development that benefit your community.",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Complaint Templates",
      badge: "Templates",
      desc: "Download pre-formatted legal draft templates for various public departments.",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "FAQ & Support",
      badge: "Help Center",
      desc: "Find answers to frequently asked questions about filing, tracking, and escalation.",
      img: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Video Guides",
      badge: "Video Tutorials",
      desc: "Watch step-by-step video tutorials to understand the JanSeva AI complaint workflow.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF7] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-10 w-full space-y-8">
        <div>
          <span className="bg-amber-100/70 border border-amber-200 text-amber-700 px-3.5 py-1 rounded-full text-xs font-bold">
            ✨ Helpful Resources
          </span>
          <h1 className="text-4xl font-black text-[#1A237E] mt-3">Knowledge Hub</h1>
          <p className="text-xs text-slate-500 font-medium">Guides, templates, and information to empower citizens with rights and legal knowledge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between p-2">
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <img src={res.img} alt={res.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {res.badge}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-slate-800 text-base">{res.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{res.desc}</p>
                <button className="text-xs font-bold text-[#FF5722] pt-2 block hover:underline">
                  Explore Resource →
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
