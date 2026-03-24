import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-muted/30 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        {/* LEFT - Icon + App Name */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="bg-blue-dark p-1.5 md:p-2 rounded-xl">
            <Shield size={12} className="text-white h-6 w-6" />
          </div>
          <span className="text-xl md:text-2xl font-semibold text-obsidian">
            জনসেবা
          </span>
        </div>

        {/* CENTER - Navigation (Hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-8 text-lg xl:text-xl text-slate-gray">
          <a
            href="#"
            className="hover:text-blue-dark transition whitespace-nowrap"
          >
            বৈশিষ্ট্য
          </a>
          <a
            href="#"
            className="hover:text-blue-dark transition whitespace-nowrap"
          >
            কিভাবে কাজ করে
          </a>
          <a
            href="#"
            className="hover:text-blue-dark transition whitespace-nowrap"
          >
            সুবিধাসমূহ
          </a>
          <a
            href="#"
            className="hover:text-blue-dark transition whitespace-nowrap"
          >
            মতামত
          </a>
        </nav>

        {/* RIGHT - Download Button + Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Download button stays, but gets slightly smaller on mobile to save space */}
          <button className="bg-blue-dark text-white px-4 md:px-6 py-2 rounded-xl font-medium hover:bg-blue-light transition shadow-sm text-sm md:text-base whitespace-nowrap">
            অ্যাপ ডাউনলোড
          </button>

          {/* Mobile Menu Button (Visible only on mobile/tablet) */}
          <button
            className="lg:hidden py-2 px-4 text-slate-gray hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN - Only visible when menu is toggled */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a
            href="#"
            className="text-lg text-slate-gray py-2 border-b border-gray-50"
          >
            বৈশিষ্ট্য
          </a>
          <a
            href="#"
            className="text-lg text-slate-gray py-2 border-b border-gray-50"
          >
            কিভাবে কাজ করে
          </a>
          <a
            href="#"
            className="text-lg text-slate-gray py-2 border-b border-gray-50"
          >
            সুবিধাসমূহ
          </a>
          <a href="#" className="text-lg text-slate-gray py-2">
            মতামত
          </a>
        </div>
      )}
    </header>
  );
}
