import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-wide text-orange-500">JanRaah</span>
          <span className="text-2xl font-light text-white">AI</span>
        </div>
        <div className="flex gap-4 items-center text-sm font-medium">
          <button className="hover:underline">Hindi / Eng</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition font-semibold">
            Track Grievance
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Pan-India Civic Guidance Platform
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 text-slate-900 leading-tight">
          Sahi Raah, Sahi Hal
        </h1>
        <p className="text-slate-600 text-lg mt-3 max-w-2xl mx-auto">
          File official grievances and non-rejectable RTI drafts for garbage, potholes, hospital negligence, and public worker misconduct across every Indian district.
        </p>

        {/* Location Selector Card */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 mt-8 max-w-3xl mx-auto text-left">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
            1. Select Your Location
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">State</label>
              <select className="w-full p-2.5 border rounded-lg bg-slate-50 text-slate-800 font-medium text-sm">
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Uttar Pradesh</option>
                <option>Delhi</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">District</label>
              <select className="w-full p-2.5 border rounded-lg bg-slate-50 text-slate-800 font-medium text-sm">
                <option>Jabalpur</option>
                <option>Bhopal</option>
                <option>Indore</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Tehsil / Ward / Village</label>
              <select className="w-full p-2.5 border rounded-lg bg-slate-50 text-slate-800 font-medium text-sm">
                <option>Ward No. 12</option>
                <option>Gorakhpur Tehsil</option>
                <option>District HQ (Fallback)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Issue Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
          <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-orange-500 cursor-pointer shadow-sm text-center transition">
            <div className="text-3xl mb-2">🗑️</div>
            <div className="font-bold text-sm text-slate-800">Garbage & Sewage</div>
            <div className="text-xs text-slate-500 mt-1">Nagar Nigam / Panchayat</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-orange-500 cursor-pointer shadow-sm text-center transition">
            <div className="text-3xl mb-2">🛣️</div>
            <div className="font-bold text-sm text-slate-800">Roads & Lights</div>
            <div className="text-xs text-slate-500 mt-1">PWD / Municipal Cell</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-orange-500 cursor-pointer shadow-sm text-center transition">
            <div className="text-3xl mb-2">🏥</div>
            <div className="font-bold text-sm text-slate-800">Hospital & Health</div>
            <div className="text-xs text-slate-500 mt-1">CMO / District Officer</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-orange-500 cursor-pointer shadow-sm text-center transition">
            <div className="text-3xl mb-2">👔</div>
            <div className="font-bold text-sm text-slate-800">Rude Staff & Bribes</div>
            <div className="text-xs text-slate-500 mt-1">Administrative Collector</div>
          </div>
        </div>
      </section>
    </main>
  );
}
