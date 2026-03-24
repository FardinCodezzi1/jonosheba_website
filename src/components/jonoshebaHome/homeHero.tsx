import { Download, ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <div className="my-4 px-6 md:px-10 flex flex-col justify-center items-start gap-6 max-w-full">
      {/* Fixed Tag: Using w-fit ensures it never overflows regardless of screen size */}
      <div className="bg-frost-blue px-4 py-2 my-4 w-fit min-h-10 flex justify-center items-center rounded-3xl gap-2 border border-blue-100/50">
        <div className="relative flex items-center justify-center w-2 h-2 shrink-0">
          <span className="absolute inset-0 rounded-full bg-blue-dark opacity-60 animate-ping"></span>
          <span className="relative w-2 h-2 rounded-full bg-blue-light"></span>
        </div>
        <div className="text-blue-light font-semibold text-sm md:text-base whitespace-nowrap">
          আপনার এলাকার উন্নয়নে অংশীদার হন
        </div>
      </div>

      {/* Title: Using responsive text sizes to prevent mobile breaking */}
      <div className="w-full">
        <h1 className="text-blue-light text-4xl md:text-6xl font-bold text-start leading-[1.2] md:leading-[1.1]">
          এলাকার সমস্যা
          <br className="hidden md:block" />
          <span className="text-obsidian">
            {" "}
            সমাধানের নতুন <br className="hidden md:block" /> দিগন্ত
          </span>
        </h1>
      </div>

      {/* Description: Removed manual <br/> to let text wrap naturally on mobile */}
      <div className="max-w-2xl">
        <p className="text-slate-gray text-lg md:text-2xl text-start leading-relaxed md:leading-normal">
          মোবাইল ফোন থেকেই আপনার এলাকার যেকোনো সমস্যা জানান এবং সমাধানের পথ
          দেখুন। সরাসরি স্থানীয় প্রশাসনের সাথে যোগাযোগ করুন এবং একসাথে গড়ুন
          সুন্দর শহর।
        </p>
      </div>

      {/* Buttons: Fixed width issues */}
      <div className="w-full mt-2">
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
          <button className="group flex items-center justify-between gap-4 bg-blue-light text-white text-lg md:text-lg font-bold px-8 py-4 rounded-3xl w-full sm:w-auto transition shadow-lg shadow-blue-200">
            <Download className="w-6 h-6 shrink-0" />
            <span className="whitespace-nowrap">অ্যাপ ডাউনলোড করুন</span>
            <ArrowRight className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
          </button>

          <button className="group flex items-center justify-center gap-3 text-slate-gray border border-slate-gray text-lg md:text-lg font-bold px-8 py-4 rounded-3xl w-full sm:w-auto transition hover:text-blue-light hover:border-blue-light">
            <Download className="w-6 h-6 shrink-0 transition-colors duration-300 group-hover:text-blue-light" />
            <span className="whitespace-nowrap">প্লে স্টোর থেকে নিন</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 mt-6">
        <div className="relative w-20 h-10 shrink-0">
          <div className="absolute top-1 left-0 w-8 h-8 rounded-full bg-blue-dark border-2 border-white z-30 shadow-sm" />
          <div className="absolute top-1 left-6 w-8 h-8 rounded-full bg-success-dark border-2 border-white z-20 shadow-sm" />
          <div className="absolute top-1 left-12 w-8 h-8 rounded-full bg-purple-dark border-2 border-white z-10 shadow-sm" />
        </div>
        <div className="text-slate-gray text-base md:text-lg font-medium leading-tight">
          ৫০ হাজারের বেশি নাগরিক ইতিমধ্যে যুক্ত
        </div>
      </div>
    </div>
  );
}
