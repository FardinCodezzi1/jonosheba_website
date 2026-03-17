import { Download, ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <div className="my-4 px-10 flex flex-col justify-center items-start gap-4">
      {/* Tag */}
      <div className="bg-frost-blue p-2 my-4 w-80 h-10 flex justify-center items-center rounded-3xl gap-2">
        <div className="relative flex items-center justify-center w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-blue-dark opacity-60 animate-ping"></span>
          <span className="relative w-2 h-2 rounded-full bg-blue-dark"></span>
        </div>
        {/* Text */}
        <div className="text-primary text-semibold text-center">
          আপনার এলাকার উন্নয়নে অংশীদার হন
        </div>
      </div>
      {/* Title */}
      <div>
        <div className="text-blue-light text-6xl font-bold text-start">
          এলাকার সমস্যা
          <br />
          <div className="text-obsidian text-6xl font-bold">
            সমাধানের নতুন <br />
            দিগন্ত
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <div className="text-slate-gray text-2xl text-start my-4">
          মোবাইল ফোন থেকেই আপনার এলাকার যেকোনো সমস্যা <br /> জানান এবং সমাধানের
          পথ দেখুন। সরাসরি স্থানীয় প্রশাসনের <br /> সাথে যোগাযোগ করুন এবং
          একসাথে গড়ুন সুন্দর শহর।
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-4">
          <button className="group flex items-center justify-between gap-4 bg-blue-light text-white text-xl font-bold px-6 py-3 rounded-3xl w-100 transition">
            <Download className="w-6 h-6 shrink-0" />
            <span className="whitespace-nowrap">অ্যাপ ডাউনলোড করুন</span>
            <ArrowRight className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
          <button className="group flex items-center justify-around gap-2 text-slate-gray border-2 border-slate-gray text-xl font-bold px-6 py-3 rounded-3xl w-80 transition hover:text-primary hover:border-primary">
            <Download className="w-6 h-6 shrink-0 transition-colors duration-300 group-hover:text-primary" />

            <span className="whitespace-nowrap">প্লে স্টোর থেকে নিন</span>
          </button>
        </div>
      </div>
      {/* Stats */}
      <div className="flex items-center gap-4">
        {/* Stacked Circles */}
        <div className="relative w-20 h-10">
          <div className="absolute top-1 left-0 w-8 h-8 rounded-full bg-blue-dark border-2 border-white" />

          <div className="absolute top-1 left-6 w-8 h-8 rounded-full bg-success-dark border-2 border-white" />

          <div className="absolute top-1 left-12 w-8 h-8 rounded-full bg-purple-dark border-2 border-white" />
        </div>

        {/* Text */}
        <div className="text-slate-gray px-4 text-lg font-medium">
          ৫০ হাজারের বেশি নাগরিক ইতিমধ্যে যুক্ত
        </div>
      </div>
    </div>
  );
}
