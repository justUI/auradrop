"use client";

import React, { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mojlnpvq";

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white text-black w-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#050505] text-white p-8 sm:p-12 md:p-20 neo-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-[-20deg] translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter italic mb-8 sm:mb-12">
              Join The <br /> <span className="text-[#CCFF00]">Waitlist</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase italic mb-4 sm:mb-6 border-b-4 border-[#CCFF00] pb-2 inline-block">
                  What you get
                </h3>
                <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="text-3xl sm:text-4xl">🚀</div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold uppercase mb-2">
                        Get in first
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        Be one of the first 100 brands to use our new tools.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="text-3xl sm:text-4xl">📊</div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold uppercase mb-2">
                        Free Stats
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        Get 1 year of our best fan-tracking tools for free.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 neo-border-accent bg-white/5">
                {status !== "success" ? (
                  <>
                    <h3 className="text-3xl font-black uppercase italic mb-6">
                      Sign up now
                    </h3>
                    <p className="text-gray-300 text-lg mb-8">
                      We are adding new brands every week. Join the list to get
                      your invitation.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="YOUR@EMAIL.COM"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading"}
                        className="w-full bg-transparent border-2 border-white/20 p-4 font-bold uppercase focus:border-[#CCFF00] outline-none transition-colors disabled:opacity-50"
                      />
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-[#CCFF00] p-4 text-black font-black uppercase italic neo-border-accent hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                      >
                        {status === "loading" ? "Joining..." : "Join the line"}
                      </button>
                    </form>
                    {status === "error" && (
                      <p className="text-red-400 mt-4 text-sm font-bold uppercase">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="text-3xl font-black uppercase italic text-[#CCFF00] mb-4">
                      You joined the movement!
                    </h3>
                    <p className="text-gray-400">
                      Check your email. We will message you very soon.
                    </p>
                  </div>
                )}

                <div className="bg-[#CCFF00] p-6 text-black mt-8">
                  <div className="text-sm font-black uppercase mb-2">
                    Total brands waiting
                  </div>
                  <div className="text-5xl font-black tracking-tighter italic">
                    420+
                  </div>
                  <div className="text-xs uppercase font-bold mt-2 opacity-60">
                    Creative brands ready to go
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row gap-8 items-center justify-between border-t border-white/20 pt-12">
              <div className="text-center md:text-left">
                <div className="text-3xl font-black uppercase italic text-[#CCFF00]">
                  Help for creators
                </div>
                <div className="text-gray-400">
                  We help you set up your first drop to make sure it sells out.
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xs font-black uppercase tracking-widest border border-white/20 px-4 py-2 opacity-50">
                  CLOTHING
                </span>
                <span className="text-xs font-black uppercase tracking-widest border border-white/20 px-4 py-2 opacity-50">
                  ART
                </span>
                <span className="text-xs font-black uppercase tracking-widest border border-white/20 px-4 py-2 opacity-50">
                  GAMES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
