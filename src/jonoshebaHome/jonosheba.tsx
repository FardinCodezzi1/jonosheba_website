import HomeHero from "../components/jonoshebaHome/homeHero";
import Phone from "../components/jonoshebaHome/phone";
import HowItWorks from "../components/jonoshebaHome/howItWorks";

export default function Jonosheba() {
  return (
    <div className="min-h-screen mt-20 flex flex-col items-center px-10">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 w-full">
        <HomeHero />
        <Phone />
      </div>
      {/* How It Works Section */}
      <div className="w-full py-20 rounded-2xl my-4">
        <HowItWorks />
      </div>
    </div>
  );
}
