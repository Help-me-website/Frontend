import { useState } from "react";
import Arrow from "../../public/BlackVector.svg";

const faqs = [
  "How many colors should I choose?",
  "How does the contrast checker work?",
  "What does the hero image represent?",
  "How can I set up the fonts?",
  "How does the contrast checker work?",
  "What does the hero image represent?",
];

const answers = [
  "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color).However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
  "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color).However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
  "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color).However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
  "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color).However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
  "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color).However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
  "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color).However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
];

const Faqs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 max-w-[1200px] mx-8 xl:mx-auto mt-10">
      <div className="flex-2 p-4">
        <h1 className="text-4xl font-bold">FAQs</h1>
        <p className="text-xl mt-2">
          Answers to some questions you might have.
        </p>
      </div>
      <div className="w-[90%] lg:w-2/3 mx-auto mb-12">
        {faqs.map((faq, index) => {
          return <ExpandingDiv faq={faq} answer={answers[index]} key={index} />;
        })}
      </div>
    </div>
  );
};

const ExpandingDiv = ({ faq, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="rounded p-4 mx-auto">
      <div className="flex justify-between items-center py-4 px-6 gap-2 rounded-2xl bg-[var(--darkcolor)] text-[var(--lightcolor)]">
        <h2 className="text-lg">{faq}</h2>
        <div
          className={`bg-[var(--lightcolor)] p-1 rounded-full hover:cursor-pointer  ${
            isExpanded ? "-rotate-90" : "rotate-90"
          }`}
          onClick={toggleExpansion}
        >
          <img src={Arrow} alt="Arrow Icon" className="w-5" />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
          isExpanded ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="mt-4 px-3">{answer}</p>
      </div>
    </div>
  );
};

export default Faqs;
