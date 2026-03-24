import Tags from "./../common/tags";

export default function CommonIssueCard() {
  const cardData = [
    {
      tagName: "রাস্তাঘাট",
    },
    {
      tagName: "নালা-নর্দমা",
    },
    {
      tagName: "বিদ্যুৎ-গ্যাস",
    },
    {
      tagName: "জনশৃঙ্খলা",
    },
    {
      tagName: "শব্দদূষণ",
    },
    {
      tagName: "রাস্তার বাতি",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-l from-green-light to-blue-lighter w-full rounded-2xl flex flex-col items-center">
      <div className="text-center mb-12 px-4">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          প্রতিটি নাগরিকের জন্য
        </h3>
        <p className="max-w-2xl mx-auto text-lg text-slate-500">
          রাস্তার গর্ত, নালা-নর্দমার সমস্যা, বিদ্যুতের গোলমাল কিংবা নিরাপত্তার
          চিন্তা - যেকোনো সমস্যাই হোক না কেন, জনসেবা আপনার কথা সংশ্লিষ্ট
          কর্তৃপক্ষের কাছে পৌঁছে দেবে এবং আপনার এলাকায় ইতিবাচক পরিবর্তন আনতে
          সাহায্য করবে।
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-4 w-full px-2">
          {cardData.map((item, index) => (
            <Tags key={index} tagName={item.tagName} />
          ))}
        </div>
      </div>
    </section>
  );
}
