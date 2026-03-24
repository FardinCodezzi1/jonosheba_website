import { Download, ArrowRight } from "lucide-react";
export default function CommonIssueCard() {
  return (
    <section className="py-20 bg-blue-dark w-full flex flex-col items-center">
      <div className="text-center mb-12 px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          আপনার এলাকার পরিবর্তনে অংশ নিন
        </h3>
        <p className="max-w-2xl mx-auto text-lg text-white">
          আজই জনসেবা ডাউনলোড করুন এবং আপনার এলাকাকে আরও সুন্দর ও বাসযোগ্য করে
          তুলতে প্রথম পদক্ষেপ নিন
        </p>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="group flex items-center justify-between gap-4 bg-white text-blue-dark text-sm md:text-sm font-bold px-8 py-4 rounded-2xl w-full sm:w-auto transition">
            <Download className="w-4 h-4 shrink-0" />
            <span className="whitespace-nowrap">অ্যাপ ডাউনলোড করুন</span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
          </button>

          <button className="group flex items-center justify-center gap-3 bg-white text-blue-dark text-sm md:text-sm font-bold px-8 py-4 rounded-2xl w-full sm:w-auto transition hover:text-primary hover:border-primary">
            <Download className="w-4 h-4 shrink-0 transition-colors duration-300 group-hover:text-primary" />
            <span className="whitespace-nowrap">প্লে স্টোর থেকে নিন</span>
          </button>
        </div>
      </div>
      <div className="w-full max-w-7xl mt-4 mx-auto px-6">
        <div className="flex flex-col text-white sm:flex-row justify-center items-center gap-6">
          <div>সম্পূর্ণ নিরাপদ</div>
          <div className="flex justify-center items-center gap-2">
            <div className="h-2 w-2 bg-green-600 rounded-full animate-pulse"></div>
            <span>২৪ ঘন্টা সেবা</span>
          </div>
          <div>★★★★★ ৪.৯ রেটিং</div>
        </div>
      </div>
    </section>
  );
}
