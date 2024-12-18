import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const faqs = [
  "How many colors should I choose?",
  "How does the contrast checker work?",
  "What does the hero image represent?",
  "How can I set up the fonts?",
  "How does the contrast checker work?",
  "What does the hero image represent?",
];

const answers = [
  "You should generally use three main colors in your design: a background color, a text color, and an accent color for emphasis. If needed, you can extend the palette to include up to five or six colors, but no more, as too many colors can make the design inconsistent and overwhelming. The key is to maintain simplicity and harmony across the platform.",
  "A contrast checker is a tool used to evaluate the contrast ratio between text and its background. It ensures that the content is accessible and readable, especially for individuals with visual impairments. It measures the difference in brightness and color between foreground and background elements and compares them against standards like the WCAG (Web Content Accessibility Guidelines). Ideally, the contrast ratio for normal text should be at least 4.5:1, and for large text, at least 3:1.",
  "A hero image is a large, prominent image on a webpage, often located at the top, which serves as a visual representation of the site's theme or purpose. It is designed to grab attention and convey the most important message or value proposition to visitors. Hero images often include text overlays, call-to-action buttons, or relevant branding elements.",
  "To set up fonts effectively, choose a primary font for the majority of your text (e.g., headers and body text). Use a secondary font for accents or decorative purposes if needed (e.g., in branding or captions). Ensure that your fonts are readable and scalable across devices. Use web-safe fonts or import fonts from libraries like Google Fonts. Maintain a consistent hierarchy by using different font weights (e.g., bold for headers, regular for body) and keep line spacing (leading) and letter spacing (kerning) balanced for readability.",
  "A contrast checker is a tool used to evaluate the contrast ratio between text and its background. It ensures that the content is accessible and readable, especially for individuals with visual impairments. It measures the difference in brightness and color between foreground and background elements and compares them against standards like the WCAG (Web Content Accessibility Guidelines). Ideally, the contrast ratio for normal text should be at least 4.5:1, and for large text, at least 3:1.",
  "A hero image is a large, prominent image on a webpage, often located at the top, which serves as a visual representation of the site's theme or purpose. It is designed to grab attention and convey the most important message or value proposition to visitors. Hero images often include text overlays, call-to-action buttons, or relevant branding elements.",
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
      <div className="flex justify-between items-center py-4 px-6 gap-2 rounded-2xl bg-primary-200 text-[var(--lightcolor)]">
        <h2 className="text-lg">{faq}</h2>
        <div
          className={`bg-[var(--lightcolor)] p-1 rounded-full hover:cursor-pointer  ${
            isExpanded ? "rotate-180" : ""
          }`}
          onClick={toggleExpansion}
        >
          <Icon
            className="w-7 h-7"
            icon={"material-symbols:arrow-circle-down-rounded"}
          />
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
