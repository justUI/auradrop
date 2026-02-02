import React from "react";

const Solution: React.FC = () => {
  const steps = [
    {
      title: "Auto-Hype",
      description:
        "Stop counting likes. Our tool finds your most active fans and gives them a spot in line before you sell.",
      icon: "⚡",
      color: "bg-[#CCFF00]",
    },
    {
      title: "Real Fans Only",
      description:
        "Keep the bots and resellers away. We make sure your products go to real people who actually love your brand.",
      icon: "🗝️",
      color: "bg-blue-500",
    },
    {
      title: "Fast Buying",
      description:
        "Fans can buy in one click. Our checkout is super fast so you can sell out in seconds without any errors.",
      icon: "💳",
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="solution" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black leading-none mb-4 sm:mb-6 uppercase tracking-tighter">
            Build <span className="text-[#CCFF00]">A Better Drop</span>
          </h2>
          <p className="text-lg sm:text-2xl text-gray-400 max-w-2xl font-medium">
            AuraDrop is a simple tool built to help you sell more and keep your
            fans happy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass p-6 sm:p-8 neo-border group hover:translate-y-[-8px] transition-all duration-300"
            >
              <div
                className={`w-12 sm:w-16 h-12 sm:h-16 ${step.color} flex items-center justify-center text-3xl sm:text-4xl mb-6 sm:mb-8 neo-border-accent`}
              >
                {step.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase italic mb-3 sm:mb-4 group-hover:text-[#CCFF00] transition-colors">
                {idx + 1}. {step.title}
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
