import {
  Milestone,
  Droplet,
  Zap,
  Siren,
  Check,
  Smartphone,
} from "lucide-react";

export default function Phone() {
  return (
    <div className="flex justify-center px-20">
      {/* Container for Floating Icons and Phone */}
      <div className="relative">
        {/* Top Right Floating Checkmark - Animated */}
        <div className="absolute -top-2 -right-4 z-20 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
          <Check size={36} strokeWidth={3} />
        </div>

        {/* Bottom Left Floating Phone - Animated */}
        <div className="absolute -bottom-6 -left-4 z-20 bg-blue-light w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce [animation-delay:0.5s]">
          <Smartphone size={24} />
        </div>

        {/* Phone Body */}
        <div className="w-90 h-160 bg-obsidian rounded-[40px] shadow-2xl border-4 border-gray-800 p-2">
          {/* Screen */}
          <div className="relative w-full h-full bg-white rounded-4xl overflow-hidden">
            {/* Status Bar (Inside Screen) */}
            <div className="absolute top-4 left-0 w-full px-6">
              <div className="flex items-center justify-between">
                {/* Time */}
                <div className="text-obsidian text-sm font-medium">
                  সকাল ৯:৪১
                </div>

                {/* Green Indicators */}
                <div className="flex items-center gap-1">
                  <div className="w-5 h-3 bg-green-500 rounded-full" />
                  <div className="w-5 h-3 bg-green-500 rounded-full" />
                  <div className="w-5 h-3 bg-green-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* App Content */}
            <div className="mt-8 pt-4">
              <div className="bg-blue-light text-white p-6 pt-10">
                <div className="text-2xl font-bold">সমস্যা জানান</div>
                <div className="text-sm opacity-90">কোন ধরনের সমস্যা?</div>
              </div>
            </div>

            {/* Options */}
            <div className="mt-6 px-4 space-y-4">
              <div className="bg-danger-light/30 text-danger p-6 h-20 rounded-2xl flex items-center border border-danger-light/50">
                <div className="text-lg font-bold flex items-center gap-4">
                  <Milestone size={24} />
                  রাস্তাঘাট
                </div>
              </div>

              <div className="bg-frost-blue text-blue-light p-6 h-20 rounded-2xl flex items-center border border-blue-100">
                <div className="text-lg font-bold flex items-center gap-4">
                  <Droplet size={24} />
                  পানি ও পয়ঃনিষ্কাশন
                </div>
              </div>

              <div className="bg-yellow-light/30 text-yellow-dark p-6 h-20 rounded-2xl flex items-center border border-yellow-200">
                <div className="text-lg font-bold flex items-center gap-4">
                  <Zap size={24} />
                  বিদ্যুৎ ও গ্যাস
                </div>
              </div>

              <div className="bg-success-light/30 text-success-dark p-6 h-20 rounded-2xl flex items-center border border-success-light">
                <div className="text-lg font-bold flex items-center gap-4">
                  <Siren size={24} />
                  জনশৃঙ্খলা
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
