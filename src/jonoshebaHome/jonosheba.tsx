import HomeHero from "../components/jonoshebaHome/homeHero";
import Phone from "../components/jonoshebaHome/phone";
import HowItWorks from "../components/jonoshebaHome/howItWorks";
import AdvantageCard from "./../components/jonoshebaHome/advantageCard";
import CommonIssueCard from "../components/jonoshebaHome/commonIssueCard";
import BenefactionCard from "../components/jonoshebaHome/benefactionCard";
import TestimonialSection from "../components/jonoshebaHome/testimonialSection";

export default function Jonosheba() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full overflow-x-hidden bg-white">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center pt-20 gap-10 lg:gap-20 w-full max-w-7xl px-4 md:px-10">
        <HomeHero />
        <Phone />
      </div>

      {/* How It Works */}
      <div className="w-full py-10">
        <HowItWorks />
      </div>

      {/* Advantage Card / Tags Section */}
      <div className="w-full py-10">
        <AdvantageCard />
      </div>

      {/* Common Issue Card - FIXED THE PADDING HERE */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-10">
        <CommonIssueCard />
      </div>

      {/* Benefaction Card (The Blue Stats Box) */}
      <div className="w-full py-10">
        <BenefactionCard />
      </div>

      {/* Testimonials */}
      <div className="w-full py-10">
        <TestimonialSection />
      </div>
    </div>
  );
}
