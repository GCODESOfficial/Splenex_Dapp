/* eslint-disable @typescript-eslint/no-explicit-any */
/* app/swap.tsx */
"use client";

import { useState } from "react";
import { ChevronDown, ArrowDown } from "lucide-react";

export default function Swap() {
  const [activeTab, setActiveTab] = useState<"Spot" | "Limit" | "Perp">("Spot");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black pt-32">
      {/* Tabs on Top */}
      <div className="flex mb-3">
        <button className="bg-[#FFD600] text-black px-6 py-2 font-semibold">
          Crypto
        </button>
        <button className="bg-black text-white border border-[#FFD600] px-6 py-2 font-semibold">
          Forex/Stocks
        </button>
      </div>

      {/* top yellow bar */}
      <div className="bg-[#FED402] p-2 md:p-3 w-[350px]"></div>

      {/* main card */}
      <div className="bg-[#191919] text-white border border-[#FCD404] w-[380px]">
        {/* Header */}
        <div className="bg-[#121212] flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-0 py-3 px-6">
          <h2 className="text-lg font-bold font-satoshi mb-2 md:mb-0">Swap Tokens</h2>
          <div className="flex gap-2">
            <button className="bg-[#1F1F1F] text-[#B1B1B1] font-medium font-general-sans px-3 py-2 text-sm">👁 Chart View</button>
            <button className="bg-[#1F1F1F] text-[#B1B1B1] px-3 py-2 text-sm">⚙</button>
          </div>
        </div>

        <div className="pb-6 px-6 md:p-6">
          {/* Tabs */}
          <div className="flex gap-2 mb-3 md:mb-6 justify-between md:justify-start">
            {["Spot", "Limit", "Perp"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 min-w-[90px] md:flex-none md:min-w-0 px-4 py-2 text-sm font-semibold border cursor-pointer font-font-general-sans ${activeTab === tab
                  ? "bg-gradient-to-r from-[#F3DA5F] from-0% to-[#FCD404] to-63% text-[#0B0B0C]"
                  : "bg-transparent text-[#EDEDED]"
                  }`}
                style={
                  activeTab === tab
                    ? {}
                    : {
                      borderImage: "linear-gradient(to right, #F3DA5F 0%, #FCD404 63%) 1",
                      borderImageSlice: 1,
                    }
                }

              >
                {tab}
              </button>
            ))}
          </div>

          {/* Swap Box */}
          <div className="space-y-2 md:space-y-1 relative">
            {/* From */}
            <div className="flex flex-col bg-[#241E08] p-3 border border-[#241E08]">
              <div className="mb-3">
                <p className="text-[#8F8F8F] text-sm font-general-sans font-medium">From</p>
              </div>

              <div className="flex flex-col lg:flex-row items-center">
                <input
                  type="number"
                  placeholder="0"
                  className="bg-transparent md:w-1/2 text-2xl outline-none flex-1 w-full font-general-sans font-medium"
                />
                <button className="flex justify-between items-center gap-2 bg-[#191919] border border-[#242424] w-full md:w-auto px-3 py-2 order-first md:order-last">
                  <span className="text-[#EDEDED] font-general-sans font-semibold text-[10px]">ETH</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute top-[43%] md:top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#1F1F1F] border-[1.5px] border-[#FCD404] p-2">
                <ArrowDown size={20} className="text-[#FFFFFF]" />
              </div>
            </div>

            {/* To */}
            <div className="flex flex-col bg-[#241E08] p-3 border border-[#241E08]">
              <div className="mb-3">
                <p className="text-[#8F8F8F] text-sm font-general-sans font-medium">To</p>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <input
                  type="number"
                  placeholder="0"
                  className="bg-transparent md:w-1/2 text-2xl outline-none flex-1 w-full font-general-sans font-medium"
                />
                <button className="bg-gradient-to-r from-[#F3DA5F] from-0% to-[#FCD404] to-63% text-[#0B0B0C] text-xs md:text-sm w-full md:w-auto px-3 py-2 font-general-sans font-semibold order-first md:order-last">
                  Select Token
                </button>
              </div>
            </div>

            {/* Connect Button */}
            <button className="w-full bg-gradient-to-r from-[#F3DA5F] from-0% to-[#FCD404] to-63% text-[#0B0B0C] text-sm py-2 font-general-sans font-semibold">
              Connect
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs text-[#FFFFFF] font-general-sans font-medium w-full max-w-[300px] mx-auto text-center mt-4">
            Trade crypto effortlessly across Ethereum and 12+ other networks, all in one place.
          </p>
        </div>


      </div>
      {/* bottom yellow bar */}
      <div className="bg-[#FED402] p-2 md:p-3 w-[350px]"></div>
    </div>
  );
}
