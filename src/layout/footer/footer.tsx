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
      <div className="max-w-7xl mx-auto px-6 py-8 mt-4">
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col items-start justify-center gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-light p-2 rounded-2xl">
                <Shield
                  size={32}
                  /* Using primary-foreground for the icon color */
                  className="text-primary-foreground bg-blue-light rounded-xl p-2 h-12 w-12"
                />
              </div>
              <span className="text-2xl text-primary-foreground font-semibold">
                জনসেবা
              </span>
            </div>
            {/* text-muted now uses your OKLab muted color */}
            <div className="text-lg text-muted">
              প্রযুক্তির সাহায্যে নাগরিকদের ক্ষমতায়ন <br /> করে আরও সুন্দর ও
              বাসযোগ্য শহর গড়ে <br /> তোলা।
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted hover:text-primary transition">
                <SquareArrowOutUpRight size={24} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition">
                <Mail size={24} />
              </a>
              <a href="#" className="text-muted hover:text-primary transition">
                <Phone size={24} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <span className="text-2xl text-primary-foreground font-semibold">
              দ্রুত লিংক
            </span>
            <ul className="flex flex-col items-start justify-center gap-2">
              <li>
                <a
                  href="#"
                  className="text-muted hover:text-primary transition"
                >
                  বিশেষত্ব
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted hover:text-primary transition"
                >
                  কীভাবে কাজ করে
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted hover:text-primary transition"
                >
                  সুবিধা
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted hover:text-primary transition"
                >
                  মতামত
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <span className="text-2xl text-primary-foreground font-semibold">
              সহায়তা
            </span>
            <ul className="flex flex-col items-start justify-center gap-2">
              <li>
                <a
                  href="#"
                  className="text-muted hover:text-primary transition"
                >
                  সাহায্য কেন্দ্র
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted hover:text-primary transition"
                >
                  যোগাযোগ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted hover:text-primary transition"
                >
                  গোপনীয়তা নীতি
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted hover:text-primary transition"
                >
                  ব্যবহারের শর্তাবলি
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <span className="text-2xl text-primary-foreground font-semibold">
              যোগাযোগ
            </span>

            <a
              href="#"
              className="flex items-center gap-3 text-muted hover:text-primary transition"
            >
              <Mail size={24} />
              <span className="text-lg">info@jonosheba.gov.bd</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 text-muted hover:text-primary transition"
            >
              <Phone size={24} />
              <span className="text-lg">১৬২৬৩</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 text-muted hover:text-primary transition"
            >
              <Landmark size={24} />
              <span className="text-lg">তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ</span>
            </a>
          </div>
        </div>
        <hr className="border-muted/20 mt-8" />
        <div className="flex items-center justify-center gap-4">
          <p className="text-muted text-center my-8 text-lg">
            &copy; {new Date().getFullYear()} জনসেবা। সকল অধিকার সংরক্ষিত।
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের একটি ডিজিটাল উদ্যোগ।
          </p>
        </div>
      </div>
    </footer>
  );
}
