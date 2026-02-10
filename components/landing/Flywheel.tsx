import React from "react";

const Flywheel: React.FC = () => {
  return (
    <section
      id="flywheel"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#050505] overflow-hidden relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full opacity-5 pointer-events-none">
        <div className="w-full h-full border-[100px] border-[#CCFF00] rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter italic mb-4 sm:mb-6">
            The <span className="text-[#CCFF00]">Circle</span> of Hype
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            When your fans are happy, your brand grows. Better drops mean more
            fans, and more fans mean more sales.
          </p>
        </div>

        {/* Mobile: Simple list view */}
        <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
          <div className="glass p-4 neo-border text-center">
            <div className="font-black uppercase mb-1 text-sm">New Drop</div>
            <div className="text-xs text-gray-400 uppercase">
              You launch a product
            </div>
          </div>
          <div className="glass p-4 neo-border text-center">
            <div className="font-black uppercase mb-1 text-sm">Fans Play</div>
            <div className="text-xs text-gray-400 uppercase">
              They earn points
            </div>
          </div>
          <div className="glass p-4 neo-border text-center">
            <div className="font-black uppercase mb-1 text-sm">Viral Hype</div>
            <div className="text-xs text-gray-400 uppercase">
              Word spreads fast
            </div>
          </div>
          <div className="glass p-4 neo-border text-center">
            <div className="font-black uppercase mb-1 text-sm">Big Sales</div>
            <div className="text-xs text-gray-400 uppercase">
              Quick sell out
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center mb-8">
          <div className="w-32 h-32 bg-[#CCFF00] rounded-full flex items-center justify-center text-black font-black text-sm text-center p-4 neo-border-accent">
            HAPPY FANS & GOOD DATA
          </div>
        </div>

        {/* Desktop: Orbiting animation */}
        <div className="relative h-[600px] hidden md:flex items-center justify-center">
          <div className="w-48 h-48 bg-[#CCFF00] rounded-full flex items-center justify-center text-black font-black text-2xl text-center p-6 neo-border-accent z-20 animate-pulse">
            HAPPY FANS & GOOD DATA
          </div>

          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-2 border-white/10 rounded-full animate-[spin_60s_linear_infinite]">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 glass p-6 neo-border text-center w-48">
              <div className="font-black uppercase mb-1">New Drop</div>
              <div className="text-xs text-gray-400 uppercase">
                You launch a product
              </div>
            </div>

            <div className="absolute top-1/2 -right-24 -translate-y-1/2 glass p-6 neo-border text-center w-48">
              <div className="font-black uppercase mb-1">Fans Play</div>
              <div className="text-xs text-gray-400 uppercase">
                They earn points
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 glass p-6 neo-border text-center w-48">
              <div className="font-black uppercase mb-1">Viral Hype</div>
              <div className="text-xs text-gray-400 uppercase">
                Word spreads fast
              </div>
            </div>

            <div className="absolute top-1/2 -left-24 -translate-y-1/2 glass p-6 neo-border text-center w-48">
              <div className="font-black uppercase mb-1">Big Sales</div>
              <div className="text-xs text-gray-400 uppercase">
                Quick sell out
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="glass p-6 sm:p-8 neo-border border-[#CCFF00]">
            <h4 className="text-xl sm:text-2xl font-black uppercase italic mb-3 sm:mb-4 text-[#CCFF00]">
              Know Your Fans
            </h4>
            <p className="text-gray-400 font-medium text-sm sm:text-base">
              "Unlike other stores, we show you who your real fans are. We tell
              you who talks about you most, not just who spent money once."
            </p>
          </div>
          <div className="glass p-6 sm:p-8 neo-border">
            <h4 className="text-xl sm:text-2xl font-black uppercase italic mb-3 sm:mb-4">
              Grow Every Time
            </h4>
            <p className="text-gray-400 font-medium text-sm sm:text-base">
              Every time you sell something, you learn more about your buyers.
              This makes your next drop even bigger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flywheel;
