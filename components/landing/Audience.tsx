import React from "react";

const Audience: React.FC = () => {
  const groups = [
    {
      title: "Clothing Brands",
      description:
        "Perfect for streetwear labels that sell limited items and want to create hype for every drop.",
      emoji: "👕",
      tags: ["Fashion", "Apparel"],
    },
    {
      title: "Social Creators",
      description:
        "For influencers with loyal fans who want a better way to sell without the mess of chat messages.",
      emoji: "📱",
      tags: ["Influencers", "Content"],
    },
    {
      title: "Community Groups",
      description:
        "For leaders who want to reward their most active fans with early access and special scores.",
      emoji: "🤝",
      tags: ["Engagement", "Fans"],
    },
    {
      title: "New Businesses",
      description:
        "For brands just starting out that want to grow fast by selling directly on social media.",
      emoji: "✨",
      tags: ["Startups", "Growth"],
    },
  ];

  return (
    <section
      id="audience"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-4 sm:mb-6">
              Who is <br />{" "}
              <span className="text-[#CCFF00]">AuraDrop For?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-medium italic">
              We built this for the next generation of brands who care about
              their fans.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="text-8xl font-black opacity-10 select-none">
              TARGET
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="glass p-6 sm:p-8 neo-border flex flex-col h-full group hover:border-[#CCFF00] transition-colors"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-300">
                {group.emoji}
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase italic mb-3 sm:mb-4">
                {group.title}
              </h3>
              <p className="text-gray-400 font-medium text-sm sm:text-base mb-6 sm:mb-8 grow">
                {group.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-2 py-1 border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 p-6 sm:p-8 bg-[#CCFF00] text-black neo-border-accent flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-xl sm:text-2xl font-black uppercase italic text-center md:text-left">
            Not sure if you fit? <br />{" "}
            <span className="text-2xl sm:text-3xl">Chat with our team.</span>
          </div>
          <a
            href="#waitlist"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-[#CCFF00] font-black uppercase italic neo-border hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
};

export default Audience;
