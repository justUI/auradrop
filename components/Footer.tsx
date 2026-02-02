import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 sm:py-20 px-4 sm:px-6 bg-[#050505] border-t border-white/10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-12 mb-12 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#CCFF00] flex items-center justify-center font-bold text-black text-xl sm:text-2xl">
                A
              </div>
              <span className="text-2xl sm:text-3xl font-bold tracking-tighter uppercase italic">
                AuraDrop
              </span>
            </div>
            <p className="text-gray-500 max-w-xs font-medium uppercase text-xs sm:text-sm tracking-widest">
              Simple tools for creator brands and their fans.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <h5 className="font-black uppercase mb-4 sm:mb-6 text-[#CCFF00] text-sm sm:text-base">
                Tools
              </h5>
              <ul className="space-y-3 sm:space-y-4 text-gray-400 font-medium text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Drop Pages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Fan Quests
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-black uppercase mb-4 sm:mb-6 text-[#CCFF00] text-sm sm:text-base">
                Us
              </h5>
              <ul className="space-y-3 sm:space-y-4 text-gray-400 font-medium text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Plan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h5 className="font-black uppercase mb-4 sm:mb-6 text-[#CCFF00] text-sm sm:text-base">
                Social
              </h5>
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-xs sm:text-sm">
                  TW
                </div>
                <div className="w-8 sm:w-10 h-8 sm:h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-xs sm:text-sm">
                  IG
                </div>
                <div className="w-8 sm:w-10 h-8 sm:h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-xs sm:text-sm">
                  LI
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 border-t border-white/10 pt-8 sm:pt-12 text-[10px] sm:text-xs font-bold uppercase text-gray-600 tracking-widest">
          <div>© 2024 AuraDrop Inc. Made for fans.</div>
          <div className="flex gap-6 sm:gap-8">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
