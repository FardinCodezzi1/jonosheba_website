const Tags = ({ tagName }: { tagName: string }) => {
  return (
    <div
      className="
      /* Mobile: Fill the grid cell */
      w-full 
      /* Desktop: Only as wide as the text */
      md:w-auto 
      bg-white px-3 py-2 md:px-6 md:py-3 
      rounded-xl md:rounded-2xl 
      shadow-sm border border-gray-100 
      flex justify-center items-center 
      transition-all hover:shadow-md hover:border-blue-100
    "
    >
      <p className="text-slate-600 text-[10px] xs:text-xs md:text-sm font-medium whitespace-nowrap">
        {tagName}
      </p>
    </div>
  );
};

export default Tags;
