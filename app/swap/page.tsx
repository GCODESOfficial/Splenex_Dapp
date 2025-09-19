/* eslint-disable @typescript-eslint/no-explicit-any */
/* app/swap.tsx */
"use client";

import { useState } from "react";
import { ChevronDown, ArrowDown } from "lucide-react";

export default function Swap() {
  const [activeTab, setActiveTab] = useState<"Spot" | "Limit" | "Perp">("Spot");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black pt-32">
      <div className="bg-[#111] text-white rounded-lg border border-[#333] shadow-xl w-[380px] p-6 relative">
        {/* Tabs on Top */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex">
          <button className="bg-[#FFD600] text-black px-6 py-2 font-semibold">
            Crypto
          </button>
          <button className="bg-black text-white border border-[#FFD600] px-6 py-2 font-semibold">
            Forex/Stocks
          </button>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Swap Tokens</h2>
          <div className="flex gap-2">
            <button className="bg-[#1c1c1c] px-3 py-2 rounded text-sm">👁 Chart View</button>
            <button className="bg-[#1c1c1c] px-3 py-2 rounded text-sm">⚙</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {["Spot", "Limit", "Perp"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-4 py-2 text-sm font-semibold border ${
                activeTab === tab
                  ? "bg-[#FFD600] text-black"
                  : "bg-[#1c1c1c] text-white border-[#333]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Swap Box */}
        <div className="space-y-4">
          {/* From */}
          <div className="flex justify-between items-center bg-[#1c1c1c] p-3 rounded border border-[#333]">
            <input
              type="number"
              placeholder="0"
              className="bg-transparent text-2xl outline-none flex-1"
            />
            <button className="flex items-center gap-2 bg-[#2c2c2c] px-3 py-2 rounded">
              <span>ETH</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="bg-[#FFD600] p-2 rounded">
              <ArrowDown size={20} className="text-black" />
            </div>
          </div>

          {/* To */}
          <div className="flex justify-between items-center bg-[#1c1c1c] p-3 rounded border border-[#333]">
            <input
              type="number"
              placeholder="0"
              className="bg-transparent text-2xl outline-none flex-1"
            />
            <button className="bg-[#FFD600] text-black px-3 py-2 rounded font-semibold">
              Select Token
            </button>
          </div>

          {/* Connect Button */}
          <button className="w-full bg-[#FFD600] text-black py-3 font-bold rounded">
            Connect
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-4">
          Trade crypto effortlessly across Ethereum and 12+ other networks, all in one place.
        </p>
      </div>
    </div>
  );
}
