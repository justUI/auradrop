import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Audience from "@/components/Audience";
import MarketOpportunity from "@/components/MarketOpportunity";
import Flywheel from "@/components/Flywheel";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#050505] selection:bg-[#CCFF00] selection:text-black overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Problem />
        <Solution />
        <Audience />
        <MarketOpportunity />
        <Flywheel />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
