import { Milestone, Droplet, Zap, Siren } from "lucide-react";

export default function Phone() {
  return (
    <div className="flex justify-center px-20">
      {/* Phone Body */}
      <div className="w-90 h-160 bg-obsidian rounded-[40px] shadow-2xl border-4 border-gray-800 p-2">
        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-4xl overflow-hidden">
          {/* Status Bar (Inside Screen) */}
          <div className="absolute top-4 left-0 w-full px-6">
            <div className="flex items-center justify-between">
              {/* Time */}
              <div className="text-obsidian text-sm font-medium">সকাল ৯:৪১</div>

              {/* Green Indicators */}
              <div className="flex items-center gap-1">
                <div className="w-5 h-3 bg-success rounded-full" />
                <div className="w-5 h-3 bg-success rounded-full" />
                <div className="w-5 h-3 bg-success rounded-full" />
              </div>
            </div>
          </div>

          {/*App Content*/}
          <div className="mt-8 pt-4">
            <div className="bg-blue-light text-white p-4">
              <div className="text-xl font-bold">সমস্যা জানান</div>
              <div className="text-sm">কোন ধরনের সমস্যা?</div>
            </div>
          </div>

          {/*Options*/}
          <div className="mt-6 px-4">
            <div className="bg-danger-light text-danger p-6 h-20 rounded-2xl flex items-center">
              <div className="text-lg font-bold flex items-center gap-4">
                <Milestone size={24} />
                রাস্তাঘাট
              </div>
            </div>
          </div>
          <div className="mt-6 px-4">
            <div className="bg-frost-blue text-blue-light p-6 h-20 rounded-2xl flex items-center">
              <div className="text-lg font-bold flex items-center gap-4">
                <Droplet size={24} />
                পানি ও পয়ঃনিষ্কাশন
              </div>
            </div>
          </div>
          <div className="mt-6 px-4">
            <div className="bg-yellow-light text-yellow-dark p-6 h-20 rounded-2xl flex items-center">
              <div className="text-lg font-bold flex items-center gap-4">
                <Zap size={24} />
                রাস্তাঘাট
              </div>
            </div>
          </div>
          <div className="mt-6 px-4">
            <div className="bg-success-light text-success-dark p-6 h-20 rounded-2xl flex items-center">
              <div className="text-lg font-bold flex items-center gap-4">
                <Siren size={24} />
                জনশৃঙ্খলা
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
