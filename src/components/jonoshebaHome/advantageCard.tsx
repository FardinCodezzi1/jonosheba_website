import FeatureCard from "../common/infocard";

export default function AdvantageCard() {
  const cardData = [
    {
      title: "নাম প্রকাশ না করেই জানান",
      description:
        "চাইলে নাম-পরিচয় গোপন রেখেই সমস্যা জানাতে পারবেন। আপনার গোপনীয়তা এবং নিরাপত্তা আমাদের অগ্রাধিকার",
      icon: "Eye",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      title: "লাইভ আপডেট পান",
      description:
        "আপনার অভিযোগের প্রতিটি পদক্ষেপ - জমা দেওয়া থেকে শুরু করে সমাধান পর্যন্ত সবকিছুর লাইভ খবর পান",
      icon: "Clock",
      bgColor: "bg-gradient-to-br from-emerald-500 to-green-700",
    },
    {
      title: "সঠিক স্থান চিহ্নিতকরণ",
      description:
        "GPS দিয়ে আপনার অবস্থান আপনাআপনি চিহ্নিত হবে, অথবা ম্যাপে সমস্যার সঠিক জায়গা দেখিয়ে দিন",
      icon: "MapPin",
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-700",
    },
    {
      title: "তাৎক্ষণিক বার্তা",
      description:
        "কর্তৃপক্ষ আপনার অভিযোগে সাড়া দিলে বা কোনো অগ্রগতি হলে সাথে সাথে মোবাইলে বার্তা পাবেন",
      icon: "Bell",
      bgColor: "bg-gradient-to-br from-orange-400 to-red-600",
    },
    {
      title: "সঠিক বিভাগে পৌঁছানো",
      description:
        "আপনার অভিযোগ স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট বিভাগে পৌঁছে যাবে - সিটি কর্পোরেশন, ওয়াসা বা পুলিশ",
      icon: "Users",
      bgColor: "bg-gradient-to-br from-rose-500 to-red-700",
    },
    {
      title: "নিরাপদ ও বিশ্বাসযোগ্য",
      description:
        "আপনার সকল তথ্য সুরক্ষিত থাকবে এবং যাচাইকৃত কর্তৃপক্ষই শুধু দেখতে পাবে ও জবাব দিতে পারবে",
      icon: "ShieldCheck",
      bgColor: "bg-gradient-to-br from-teal-400 to-cyan-600",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50 w-full max-w-full flex flex-col items-center overflow-hidden">
      <div className="text-center mb-10 md:mb-16 w-full">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 px-4">
          বিশেষ সুবিধাসমূহ
        </h3>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 px-4">
          আপনার এলাকার সমস্যা জানানো এবং সমাধানের জন্য প্রয়োজনীয় সব ব্যবস্থা
          একসাথে
        </p>
      </div>

      {/* Grid Container - Added 'box-border' and removed extra margins */}
      <div className="w-full max-w-7xl mx-auto box-border">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {cardData.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
