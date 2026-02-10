"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2021", val: 104 },
  { year: "2022", val: 142 },
  { year: "2023", val: 184 },
  { year: "2024", val: 250 },
  { year: "2025", val: 380 },
  { year: "2026", val: 480 },
];

const MarketOpportunity: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-neutral-100 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm font-black text-blue-600 mb-4 tracking-[0.2em] uppercase">
              The Future
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter mb-8">
              Everyone is <br /> shopping on <br /> social media.
            </h2>
            <p className="text-xl text-neutral-600 mb-10 font-medium leading-relaxed">
              Creator brands are growing 3 times faster than regular stores.
              Soon, most people will buy directly from their favorite creators.
              We help you get ready for that.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 border-4 border-black bg-white">
                <div className="text-4xl font-black mb-1">$480B</div>
                <div className="text-xs font-black uppercase text-neutral-400">
                  Total Money Spent (2026)
                </div>
              </div>
              <div className="p-6 border-4 border-black bg-[#CCFF00]">
                <div className="text-4xl font-black mb-1">3.5x</div>
                <div className="text-xs font-black uppercase text-black">
                  More Sales for You
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 border-4 border-black bg-white h-[400px]">
            <h4 className="font-black uppercase mb-8 text-center border-b-2 border-black pb-4">
              Social Shopping Growth
            </h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#CCFF00" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#CCFF00" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="year" hide />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#000",
                      color: "#fff",
                      border: "none",
                      borderRadius: "0px",
                    }}
                    itemStyle={{ color: "#CCFF00" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="val"
                    stroke="#000"
                    strokeWidth={4}
                    fillOpacity={1}
                    fill="url(#colorVal)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
