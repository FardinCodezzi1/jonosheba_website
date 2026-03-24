import BenefitCard from "./../common/benefitcard";

export default function BenefactionCard() {
  const citizenData = {
    title: "নাগরিকদের জন্য",
    subtitle: "সুন্দর এলাকা গড়ুন",
    iconName: "Heart" as const,
    iconBgColor: "bg-blue-light",
    pillColor: "bg-blue-light",
    features: [
      "মিনিটেই সমস্যা জানান",
      "কাজের অগ্রগতি সরাসরি দেখুন",
      "প্রশাসনের সাথে সরাসরি যোগাযোগ",
      "পরিচয় গোপন রাখার সুবিধা",
      "এলাকার উন্নয়নে সক্রিয় ভূমিকা",
    ],
  };
  const AuthorityData = {
    title: "কর্তৃপক্ষের জন্য",
    subtitle: "দক্ষ সেবা প্রদান",
    iconName: "Award" as const,
    iconBgColor: "bg-green-600",
    pillColor: "bg-blue-light",
    features: [
      "মিনিটেই সমস্যা জানান",
      "কাজের অগ্রগতি সরাসরি দেখুন",
      "প্রশাসনের সাথে সরাসরি যোগাযোগ",
      "পরিচয় গোপন রাখার সুবিধা",
      "এলাকার উন্নয়নে সক্রিয় ভূমিকা",
    ],
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50 w-full flex flex-col items-center overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
          সবার জন্য উপকার
        </h3>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-500">
          নাগরিক ও প্রশাসন - উভয়ের জন্য সুবিধা তৈরি করে আরও সুন্দর ও বাসযোগ্য
          শহর গড়ে তোলা
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6">
        {/* flex-col for mobile, flex-row for desktop */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 md:gap-10">
          {/* We wrap each card or ensure the card handles its own basis */}
          <div className="flex-1 lg:basis-1/2">
            <BenefitCard {...citizenData} />
          </div>
          <div className="flex-1 lg:basis-1/2">
            <BenefitCard {...AuthorityData} />
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 mt-10">
        <div className="w-full py-12 md:py-16 bg-blue-600 rounded-3xl text-white text-center shadow-xl">
          {/* Header Section */}
          <div className="mb-10 px-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              সচেতন নাগরিক, দায়বদ্ধ প্রশাসন
            </h3>
            <p className="text-sm md:text-base text-blue-50/90 max-w-2xl mx-auto">
              হাজার হাজার নাগরিকের সাথে যোগ দিন যারা নিজেদের এলাকায় পরিবর্তন
              আনছেন
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-0">
            {/* Stat 1 */}
            <div className="flex flex-col border-gray-400/20 lg:border-r last:border-0">
              <span className="text-2xl md:text-4xl font-bold mb-1">
                ৫০ হাজার+
              </span>
              <span className="text-xs md:text-sm text-blue-100/80">
                সক্রিয় নাগরিক
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col border-gray-400/20 lg:border-r last:border-0">
              <span className="text-2xl md:text-4xl font-bold mb-1">
                ২৫ হাজার+
              </span>
              <span className="text-xs md:text-sm text-blue-100/80">
                সমাধানকৃত সমস্যা
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col border-gray-400/20 lg:border-r last:border-0">
              <span className="text-2xl md:text-4xl font-bold mb-1">২০০+</span>
              <span className="text-xs md:text-sm text-blue-100/80">
                সেবা প্রদানকারী দপ্তর
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl font-bold mb-1">৯৫%</span>
              <span className="text-xs md:text-sm text-blue-100/80">
                সন্তুষ্ট নাগরিক
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
