import React from 'react';

const ScrollingText = () => {
  const text = "TRANSFORMING AGENCY WORK INTO PURPOSEFUL ART";
  const repeatedText = new Array(10).fill(text).join(" — ");

  return (
    <div className="relative w-full bg-white overflow-hidden py-10 md:py-20 border-y border-gray-100 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        <h2 className="font-teko font-black text-[80px] md:text-[150px] lg:text-[200px] leading-none tracking-tighter text-outline text-gray-200 uppercase">
          {repeatedText} —&nbsp;
        </h2>
        <h2 className="font-teko font-black text-[80px] md:text-[150px] lg:text-[200px] leading-none tracking-tighter text-outline text-gray-200 uppercase">
          {repeatedText} —&nbsp;
        </h2>
      </div>
    </div>
  );
};

export default ScrollingText;
