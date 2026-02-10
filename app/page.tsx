import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Audience from "@/components/landing/Audience";
import MarketOpportunity from "@/components/landing/MarketOpportunity";
import Flywheel from "@/components/landing/Flywheel";
import Waitlist from "@/components/landing/Waitlist";
import Footer from "@/components/landing/Footer";

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
