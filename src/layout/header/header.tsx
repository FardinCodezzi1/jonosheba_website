import { Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-muted/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT - Icon + App Name */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-light p-2 rounded-2xl">
            <Shield
              size={32}
              className="text-primary-foreground bg-blue-light rounded-xl p-2 h-12 w-12"
            />
          </div>
          <span className="text-2xl font-semibold text-obsidian">জনসেবা</span>
        </div>

        {/* CENTER - Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xl text-slate-gray">
          <a href="#" className="hover:text-blue-dark transition">
            বৈশিষ্ট্য
          </a>
          <a href="#" className="hover:text-blue-dark transition">
            কিভাবে কাজ করে
          </a>
          <a href="#" className="hover:text-blue-dark transition">
            সুবিধাসমূহ
          </a>
          <a href="#" className="hover:text-blue-dark transition">
            মতামত
          </a>
        </nav>

        {/* RIGHT - Download Button */}
        <div>
          <button className="bg-blue-light text-primary-foreground px-6 py-2 rounded-xl font-medium hover:bg-blue-dark transition shadow-sm">
            অ্যাপ ডাউনলোড
          </button>
        </div>
      </div>
    </header>
  );
}
