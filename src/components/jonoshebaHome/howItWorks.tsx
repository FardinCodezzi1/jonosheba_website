import { CircleCheckBig, Eye, MapPin, Bell } from "lucide-react";

export default function HowItWorks() {
  return (
    // 1. Removed h-60 (This was the main cause of overlapping items)
    // 2. Used min-h-screen or padding to give it space instead
    <div className="pt-5 flex flex-col justify-center items-center px-6 md:px-10 gap-10 my-2 md:my-10 w-full">
      <div className="text-3xl md:text-4xl font-bold">কীভাবে কাজ করে</div>
      <div className="text-lg md:text-2xl text-slate-gray text-center max-w-4xl px-4">
        মাত্র কয়েকটি সহজ ধাপে এলাকার সমস্যা জানান এবং দেখুন কীভাবে আপনার
        <br className="hidden md:block" />
        এলাকা আরও ভালো হয়ে উঠছে
      </div>

      {/* 3. desktop: gap-18 | mobile: gap-10 */}
      <div className="flex flex-wrap justify-center gap-10 lg:gap-18 w-full">
        {/* CARD 1 - Problems Type */}
        <div className="w-full xs:w-80 md:w-72">
          <div className="group relative bg-white h-84 rounded-2xl pt-10 px-6 pb-6 shadow-lg shadow-gray-300 border border-gray-200 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-light w-9 h-9 rounded-full text-white flex items-center justify-center font-bold shadow-md">
              1
            </div>
            <div className="bg-linear-to-t from-blue-light/90 to-blue-dark/90 w-16 h-16 rounded-2xl text-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
              <MapPin size={32} />
            </div>
            <div className="text-xl text-obsidian font-bold mb-3">
              সমস্যার ধরন নির্বাচন
            </div>
            <div className="text-base text-slate-gray">
              রাস্তাঘাট, পানি-পয়ঃনিষ্কাশন, বিদ্যুৎ কিংবা আইনশৃঙ্খলা - যেকোনো
              সমস্যার জন্য সঠিক বিভাগ বেছে নিন
            </div>
          </div>
        </div>

        {/* CARD 2 - File Complaint */}
        <div className="w-full xs:w-80 md:w-72">
          <div className="group relative bg-white h-84 rounded-2xl pt-10 px-6 pb-6 shadow-lg shadow-gray-300 border border-gray-200 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-light w-9 h-9 rounded-full text-white flex items-center justify-center font-bold shadow-md">
              2
            </div>
            <div className="bg-linear-to-t from-success-dark to-success w-16 h-16 rounded-2xl text-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
              <CircleCheckBig size={32} />
            </div>
            <div className="text-xl text-obsidian font-bold mb-3">
              অভিযোগ দাখিল করুন
            </div>
            <div className="text-base text-slate-gray">
              সমস্যার বিস্তারিত বিবরণ, ছবি এবং ঠিকানা যোগ করুন যাতে কর্তৃপক্ষ
              দ্রুত ব্যবস্থা নিতে পারে
            </div>
          </div>
        </div>

        {/* CARD 3 - Admin Notification */}
        <div className="w-full xs:w-80 md:w-72">
          <div className="group relative bg-white h-84 rounded-2xl pt-10 px-6 pb-6 shadow-lg shadow-gray-300 border border-gray-200 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-light w-9 h-9 rounded-full text-white flex items-center justify-center font-bold shadow-md">
              3
            </div>
            <div className="bg-linear-to-t from-purple-dark to-purple-light w-16 h-16 rounded-2xl text-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
              <Bell size={32} />
            </div>
            <div className="text-xl text-obsidian font-bold mb-3">
              প্রশাসন নোটিশ পাবে
            </div>
            <div className="text-base text-slate-gray">
              আপনার অভিযোগ স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট বিভাগের কাছে পৌঁছে যাবে
              এবং দ্রুত ব্যবস্থা নেওয়া হবে
            </div>
          </div>
        </div>

        {/* CARD 4 - Track Progress */}
        <div className="w-full xs:w-80 md:w-72">
          <div className="group relative bg-white h-84 rounded-2xl pt-10 px-6 pb-6 shadow-lg shadow-gray-300 border border-gray-200 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-light w-9 h-9 rounded-full text-white flex items-center justify-center font-bold shadow-md">
              4
            </div>
            <div className="bg-linear-to-t from-orange-dark to-orange-light w-16 h-16 rounded-2xl text-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
              <Eye size={32} />
            </div>
            <div className="text-xl text-obsidian font-bold mb-3">
              অগ্রগতি দেখুন
            </div>
            <div className="text-base text-slate-gray">
              সমস্যা সমাধান না হওয়া পর্যন্ত প্রতিটি পদক্ষেপের আপডেট পেতে থাকুন
              এবং ফলাফল দেখুন
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Tag */}
      <div className="bg-frost-blue p-4 rounded-full text-blue-light mt-10 border border-blue-100">
        <div className="flex justify-center items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-light animate-pulse"></div>
          <div className="font-medium text-sm md:text-base">
            গড়ে ৩-৫ দিনে সমাধান হয় বেশিরভাগ সমস্যা
          </div>
        </div>
      </div>
    </div>
  );
}
