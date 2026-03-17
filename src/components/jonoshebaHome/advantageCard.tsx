import FeatureCard from "./../common/infocard";

export default function AdvantageCard() {
  const cardData = [
    {
      title: "নাম প্রকাশ না করেই জানান",
      description:
        "চাইলে নাম-পরিচয় গোপন রেখেই সমস্যা জানাতে পারবেন। আপনার গোপনীয়তা এবং নিরাপত্তা আমাদের অগ্রাধিকার",
      icon: "Eye",
      bgColor: "bg-blue-600",
    },
    {
      title: "লাইভ আপডেট পান",
      description:
        "আপনার অভিযোগের প্রতিটি পদক্ষেপ - জমা দেওয়া থেকে শুরু করে সমাধান পর্যন্ত সবকিছুর লাইভ খবর পান",
      icon: "Clock",
      bgColor: "bg-green-600",
    },
    {
      title: "সঠিক স্থান চিহ্নিতকরণ",
      description:
        "GPS দিয়ে আপনার অবস্থান আপনাআপনি চিহ্নিত হবে, অথবা ম্যাপে সমস্যার সঠিক জায়গা দেখিয়ে দিন",
      icon: "MapPin",
      bgColor: "bg-purple-600",
    },
    {
      title: "তাৎক্ষণিক বার্তা",
      description:
        "কর্তৃপক্ষ আপনার অভিযোগে সাড়া দিলে বা কোনো অগ্রগতি হলে সাথে সাথে মোবাইলে বার্তা পাবেন",
      icon: "Bell",
      bgColor: "bg-orange-600",
    },
    {
      title: "সঠিক বিভাগে পৌঁছানো",
      description:
        "আপনার অভিযোগ স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট বিভাগে পৌঁছে যাবে - সিটি কর্পোরেশন, ওয়াসা বা পুলিশ",
      icon: "Users",
      bgColor: "bg-red-600",
    },
    {
      title: "নিরাপদ ও বিশ্বাসযোগ্য",
      description:
        "আপনার সকল তথ্য সুরক্ষিত থাকবে এবং যাচাইকৃত কর্তৃপক্ষই শুধু দেখতে পাবে ও জবাব দিতে পারবে",
      icon: "ShieldCheck",
      bgColor: "bg-teal-600",
    },
  ];

  return (
    // 'w-full' ensures the section takes up the screen width
    <section className="py-20 bg-gray-50 w-full flex flex-col items-center">
      <div className="text-center mb-12 px-4">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          বিশেষ সুবিধাসমূহ
        </h3>
        <p className="max-w-2xl mx-auto text-lg text-slate-500">
          আপনার এলাকার সমস্যা জানানো এবং সমাধানের জন্য প্রয়োজনীয় সব ব্যবস্থা
          একসাথে
        </p>
      </div>

      {/* This container prevents the cards from collapsing/becoming skinny */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
