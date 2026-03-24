import { Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  location: string;
  image: string;
  stars: number;
  comment: string;
}

const TestimonialCard = ({
  name,
  role,
  location,
  image,
  stars,
  comment,
}: TestimonialProps) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all hover:shadow-md">
      {/* User Info Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-gray-50"
        />
        <div className="flex flex-col">
          <h4 className="text-lg font-bold text-gray-800 leading-tight">
            {name}
          </h4>
          <p className="text-xs md:text-sm text-slate-500">{role}</p>
          <p className="text-[10px] md:text-xs text-slate-400 font-medium">
            {location}
          </p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-4 text-yellow-400">
        {[...Array(stars)].map((_, i) => (
          <span key={i} className="text-lg md:text-xl">
            ★
          </span>
        ))}
      </div>

      {/* Comment Section with Quote Icon */}
      <div className="relative">
        <Quote className="absolute -top-1 -left-2 text-blue-100 w-8 h-8 z-0 opacity-50" />
        <p className="relative pl-8 z-10 text-sm md:text-base text-slate-600 leading-relaxed italic">
          "{comment}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
