import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-20 sm:pb-40 px-4 sm:px-6">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#CCFF00] opacity-10 blur-[120px] rounded-full overflow-hidden"></div>
      <div className="absolute bottom-0 -left-20 w-48 sm:w-80 h-48 sm:h-80 bg-blue-600 opacity-5 blur-[100px] rounded-full overflow-hidden"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 mb-4 sm:mb-6 font-medium text-xs sm:text-sm tracking-widest uppercase">
            New way to sell for creators
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-6 sm:mb-8 uppercase italic">
            Shopify is for stores. <br />
            <span className="text-[#CCFF00]">We are for Fans.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-10 max-w-xl leading-relaxed">
            Stop trying to sell through messy chat messages. Turn your followers
            into buyers with a simple, fun{" "}
            <span className="text-white font-bold">Drop Page</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#waitlist"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#CCFF00] text-black text-center font-black text-base sm:text-lg neo-border-accent hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
            >
              Get Early Access
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="animate-float">
            <div className="glass p-4 neo-border rotate-3 relative z-10">
              <div className="aspect-4/3 bg-neutral-900 overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
                  alt="Streetwear Drop"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-end p-6">
                  <div className="mt-auto w-full">
                    <div className="flex justify-between items-center text-xs mb-2 text-[#CCFF00] font-mono">
                      <span>LIVE DROP: GENESIS HOODIE</span>
                      <span>2,400 PEOPLE IN LINE</span>
                    </div>
                    <div className="w-full h-2 bg-white/20">
                      <div className="w-3/4 h-full bg-[#CCFF00]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UI Card Floating */}
            <div className="absolute -bottom-16 -left-8 glass p-6 neo-border -rotate-6 z-20 w-64">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#CCFF00]/20 border border-[#CCFF00]/50 overflow-hidden flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <div className="font-black text-sm uppercase italic">
                    Score: 8,420
                  </div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                    Top Fan - Gets Early Entry
                  </div>
                </div>
              </div>
              <div className="h-1.5 bg-[#CCFF00] w-full neo-border-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
