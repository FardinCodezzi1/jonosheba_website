import React from "react";
import * as LucideIcons from "lucide-react";

interface BenefitCardProps {
  iconName: keyof typeof LucideIcons;
  iconBgColor: string; // e.g., "bg-blue-600"
  pillColor: string; // e.g., "bg-blue-600"
  title: string;
  subtitle: string;
  features: string[];
}

const BenefitCard = ({
  iconName,
  iconBgColor,
  pillColor,
  title,
  subtitle,
  features,
}: BenefitCardProps) => {
  // Dynamically grab the icon from Lucide
  const Icon = LucideIcons[iconName] as React.ElementType;

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 w-full h-full flex flex-col transition-all hover:shadow-md">
      {/* Header */}
      <div className="flex items-center gap-5 mb-8">
        <div className={`${iconBgColor} p-4 rounded-2xl text-white shrink-0`}>
          {Icon && <Icon size={28} strokeWidth={2.5} />}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            {title}
          </h2>
          <p className="text-slate-gray text-base md:text-lg">{subtitle}</p>
        </div>
      </div>

      {/* List */}
      <ul className="flex flex-col gap-5">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center gap-4">
            {/* The Pill/Dot */}
            <span className={`${pillColor} w-2 h-2 rounded-full shrink-0`} />
            <span className="text-slate-gray text-base md:text-lg font-medium leading-snug">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitCard;
