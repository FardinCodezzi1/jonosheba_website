import React from "react";
import {
  Eye,
  Clock,
  MapPin,
  Bell,
  Users,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

const IconRenderer = ({ name, ...props }: { name: string } & LucideProps) => {
  const icons: Record<string, React.ElementType> = {
    Eye,
    Clock,
    MapPin,
    Bell,
    Users,
    ShieldCheck,
  };

  const SelectedIcon = icons[name];
  return SelectedIcon ? <SelectedIcon {...props} /> : null;
};

const FeatureCard = ({
  title,
  description,
  icon,
  bgColor,
}: FeatureCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start h-full w-full transition-all hover:shadow-md">
      {/* Icon Wrapper */}
      <div
        className={`${bgColor} p-3 rounded-xl text-white mb-6 flex items-center justify-center`}
      >
        <IconRenderer name={icon} size={24} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
        {title}
      </h3>

      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
