import React from "react";

const Problem: React.FC = () => {
  return (
    <section
      id="problem"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none mb-6 sm:mb-8 uppercase italic tracking-tighter">
              Selling is <br />{" "}
              <span className="bg-black text-white px-2">Too Hard</span>
            </h2>
            <p className="text-xl sm:text-2xl font-bold mb-6 italic text-neutral-600">
              Regular online stores weren't made for people like you.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-4 p-4 sm:p-6 border-2 border-black">
                <div className="text-3xl sm:text-4xl font-black text-neutral-300">
                  01
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black uppercase">
                    The Messaging Mess
                  </h4>
                  <p className="text-neutral-600 font-medium text-sm sm:text-base">
                    Answering hundreds of DMs to sell one shirt is slow and
                    exhausting. It's easy to make mistakes and lose money.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 sm:p-6 border-2 border-black bg-neutral-50 shadow-[8px_8px_0px_#000]">
                <div className="text-3xl sm:text-4xl font-black text-black">
                  02
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black uppercase">
                    Who are your fans?
                  </h4>
                  <p className="text-neutral-600 font-medium text-sm sm:text-base">
                    When you use a basic link, you don't know who your best fans
                    are. You treat your biggest supporters like total strangers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-6 sm:p-8 border-4 border-black bg-white">
              <div className="text-5xl sm:text-6xl font-black mb-4">65%</div>
              <div className="text-lg sm:text-xl font-bold uppercase mb-6 sm:mb-8 border-b-4 border-black pb-4">
                People leave when the checkout is too slow.
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs sm:text-sm font-black uppercase">
                  <span>Mistakes made by hand</span>
                  <span className="text-red-500">28%</span>
                </div>
                <div className="w-full h-3 sm:h-4 bg-neutral-100 border-2 border-black">
                  <div className="w-[28%] h-full bg-red-500"></div>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-black uppercase mt-4">
                  <span>Knowing your best buyers</span>
                  <span className="text-red-500">None</span>
                </div>
                <div className="w-full h-3 sm:h-4 bg-neutral-100 border-2 border-black">
                  <div className="w-[8%] h-full bg-red-500"></div>
                </div>
              </div>
              <p className="mt-8 sm:mt-12 text-xs sm:text-sm font-bold italic text-neutral-400">
                Numbers from our study of 50+ new clothing brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
