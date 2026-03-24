import {
  Landmark,
  Mail,
  Phone,
  Shield,
  SquareArrowOutUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-obsidian border-t border-muted/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Section 1: Brand & Info */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-dark p-2 rounded-xl">
                <Shield size={12} className="text-primary-foreground h-8 w-8" />
              </div>
              <span className="text-2xl text-primary-foreground font-semibold">
                জনসেবা
              </span>
            </div>
            <div className="text-lg text-muted leading-relaxed">
              প্রযুক্তির সাহায্যে নাগরিকদের ক্ষমতায়ন
              <br className="hidden lg:block" /> করে আরও সুন্দর ও বাসযোগ্য শহর
              গড়ে <br className="hidden lg:block" /> তোলা।
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="text-muted hover:text-white transition-colors"
              >
                <SquareArrowOutUpRight size={24} />
              </a>
              <a
                href="#"
                className="text-muted hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="text-muted hover:text-white transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-xl text-primary-foreground font-semibold">
              দ্রুত লিংক
            </span>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-muted hover:text-white transition">
                  বিশেষত্ব
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-white transition">
                  কীভাবে কাজ করে
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-white transition">
                  সুবিধা
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-white transition">
                  মতামত
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Support */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-xl text-primary-foreground font-semibold">
              সহায়তা
            </span>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-muted hover:text-white transition">
                  সাহায্য কেন্দ্র
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-white transition">
                  যোগাযোগ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-white transition">
                  গোপনীয়তা নীতি
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-white transition">
                  ব্যবহারের শর্তাবলি
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact Info */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-xl text-primary-foreground font-semibold">
              যোগাযোগ
            </span>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@jonosheba.gov.bd"
                className="flex items-center gap-3 text-muted hover:text-white transition group"
              >
                <Mail size={20} className="shrink-0" />
                <span className="text-base break-all">
                  info@jonosheba.gov.bd
                </span>
              </a>
              <a
                href="tel:16263"
                className="flex items-center gap-3 text-muted hover:text-white transition"
              >
                <Phone size={20} className="shrink-0" />
                <span className="text-base">১৬২৬৩</span>
              </a>
              <div className="flex items-start gap-3 text-muted">
                <Landmark size={20} className="shrink-0 mt-1" />
                <span className="text-base">
                  তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-muted/10 mt-12 mb-8" />
        <div className="text-center">
          <p className="text-muted text-base md:text-lg leading-relaxed">
            &copy; {new Date().getFullYear()} জনসেবা। সকল অধিকার সংরক্ষিত।
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের একটি ডিজিটাল উদ্যোগ।
          </p>
        </div>
      </div>
    </footer>
  );
}
