"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#FFFBF7] border-b border-orange-100/60 sticky top-0 z-50 py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-200 flex items-center justify-center font-bold text-amber-600 text-sm">
            🏛️
          </div>
          <div>
            <div className="flex items-center gap-1 font-black text-xl text-[#1E293B] tracking-tight">
              <span>JanSeva</span>
              <span className="text-[#FF5722]">AI</span>
            </div>
            <p className="text-[10px] font-semibold text-[#FF5722] -mt-1 tracking-wide">
              Your Voice. Our Responsibility.
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-700">
          <Link href="/" className="hover:text-[#FF5722] transition">Home</Link>
          <Link href="/categories" className="hover:text-[#FF5722] transition">Categories</Link>
          <Link href="/#how-it-works" className="hover:text-[#FF5722] transition">How It Works</Link>
          <Link href="/#track" className="hover:text-[#FF5722] transition">Track Complaint</Link>
          <Link href="/resources" className="hover:text-[#FF5722] transition">Resources</Link>
          <Link href="/about" className="hover:text-[#FF5722] transition">About Us</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="bg-indigo-900/5 border border-indigo-200/50 rounded-full px-3 py-1 flex items-center gap-1.5 text-xs font-bold text-indigo-950">
            <span>🌐 English</span>
            <span className="text-slate-400 font-normal">|</span>
            <span className="text-slate-500 font-medium hover:text-slate-800 cursor-pointer">हिंदी</span>
          </div>
          <Link href="/login" className="bg-[#1A237E] hover:bg-indigo-900 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md transition">
            Login / Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
