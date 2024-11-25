import React from "react";
import QuoteCarousel from "./QuoteCarousel";

const QuoteSection = () => {
  const quotes = [
    {
      quote: `“The best thing that I love about MedExpress is the friendships that I've made with my team and being able to form meaningful connections with my patients."`,
      citation: "- Dr. Jeena Zachariah, Physican",
    },
    {
      quote: `“The folks I met with were true professionals and knew right away the seriousness of the situation. I am very grateful to have stopped by your office that day."`,
      citation: "- Glen C.",
    },
    {
      quote: `“The medical team was prompt, quick and efficient. I was treated with grace, honor and respect. The professionalism and customer serviced I received was impeccable.”`,
      citation: "- Eric C.",
    },
  ];
  return (
    <div className="relative bg-background-blue-2 px-6 py-10 md:px-[180px] md:pb-[70px] md:pt-[80px]">
      <QuoteCarousel quotes={quotes} />
    </div>
  );
};

export default QuoteSection;
