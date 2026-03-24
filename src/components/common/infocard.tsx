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
    // 'min-w-0' is a CSS trick that allows flex/grid children to shrink below their content size
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl border-gray-100 flex flex-col items-start h-full w-full min-w-0 transition-all hover:shadow-md box-border">
      <div
        className={`p-3 rounded-xl text-white mb-6 flex group items-center justify-center shrink-0 ${bgColor}`}
      >
        <IconRenderer name={icon} size={24} />
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight w-full wrap-break-word">
        {title}
      </h3>

      <p className="text-gray-500 leading-relaxed text-sm w-full wrap-break-word">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
