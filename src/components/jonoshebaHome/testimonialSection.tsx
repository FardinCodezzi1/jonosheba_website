import TestimonialCard from "../common/testimonialcard";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "সাবিনা খাতুন",
      role: "গৃহিণী",
      location: "ধানমণ্ডি, ঢাকা",
      image: "https://i.pravatar.cc/150?u=eshitabbc",
      stars: 5,
      comment:
        "আমাদের এলাকার রাস্তার বাতি নষ্ট ছিল অনেকদিন। জনসেবা অ্যাপে জানানোর মাত্র ৩ দিনে সিটি কর্পোরেশন এসে ঠিক করে দিল। অসাধারণ সেবা!",
    },
    {
      name: "আব্দুল করিম",
      role: "দোকানদার",
      location: "পুরান ঢাকা",
      image: "https://i.pravatar.cc/150?u=rarim",
      stars: 5,
      comment:
        "দোকানের সামনে রাস্তায় বড় গর্ত ছিল। গাড়ি-রিকশা যেতে পারতো না। জনসেবায় ছবিসহ জানানোর পর দ্রুত মেরামত হয়ে গেছে। এখন ব্যবসাও ভালো।",
    },
    {
      name: "ইঞ্জিনিয়ার রহিমা বেগম",
      role: "ঢাকা সিটি কর্পোরেশন",
      location: "জনস্বাস্থ্য বিভাগ",
      image: "https://i.pravatar.cc/150?u=fahima",
      stars: 5,
      comment:
        "জনসেবার মাধ্যমে আমরা নাগরিকদের কাছ থেকে সরাসরি সমস্যার খবর পাই। এতে আমাদের কাজ অনেক সহজ হয়েছে এবং দ্রুত সেবা দিতে পারছি।",
    },
    {
      name: "মোহাম্মদ রফিক",
      role: "এলাকা কমিটির সদস্য",
      location: "গুলশান, ঢাকা",
      image: "https://i.pravatar.cc/150?u=rafiq",
      stars: 3,
      comment:
        "রাতের বেলা এলাকায় নিরাপত্তার সমস্যা ছিল। নাম গোপন রেখে জনসেবায় জানানোর পর পুলিশ টহল বাড়িয়েছে। এখন সবাই নিরাপদ বোধ করি।",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full flex flex-col items-center">
      {/* Header same style as BenefactionCard */}
      <div className="text-center mb-14 px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          নাগরিকদের মতামত
        </h3>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-500">
          যারা জনসেবা ব্যবহার করে তাদের এলাকায় ইতিবাচক পরিবর্তন এনেছেন, তাদের
          প্রকৃত অভিজ্ঞতা
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Responsive Grid: 1 column on mobile, 2 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 mt-8">
        <div className="text-center text-slate-600 text-sm">
          দেশের প্রধান সরকারি প্রতিষ্ঠান ও লাখো নাগরিকের আস্থাভাজন
        </div>
        <div className="flex justify-center items-center gap-6 text-slate-300 text-xs mt-4">
          <div>সিটি কর্পোরেশন</div>
          <div>ওয়াসা</div>
          <div>পুলিশ</div>
          <div>ফায়ার সার্ভিস</div>
          <div>স্বাস্থ্য বিভাগ</div>
        </div>
      </div>
    </section>
  );
}
