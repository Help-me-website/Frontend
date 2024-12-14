import { Link } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import { isLogedIn, darkMode } from "../atoms";
import Lamp from "../../public/lamp.svg";
import WhiteArrow from "../../public/WhiteVector.svg";
import BlackArrow from "../../public/BlackVector.svg";
import Dolar from "../../public/dolar.svg";
import Tech from "../../public/tech.svg";
import Edu from "../../public/edu.svg";
import Health from "../../public/health.svg";
import Skills from "../../public/skills.svg";
import Society from "../../public/society.svg";
import Science from "../../public/science.svg";
import Game from "../../public/game.svg";
import Hobby from "../../public/hobby.svg";

const categoryNames: string[] = [
  "Professional development",
  "Technology",
  "Education & Learning",
  "Mental & Care",
  "Life Skills",
  "Society & Culture",
  "Game Development",
  "Science & Nature",
  "Hobbies & Interests",
];

const categoryIcons: string[] = [
  Dolar,
  Tech,
  Edu,
  Health,
  Skills,
  Society,
  Science,
  Game,
  Hobby,
];

const categoryLinks: string[] = [
  "/signup",
  "/login",
  "/signup",
  "/signup",
  "/signup",
  "/signup",
  "/signup",
  "/signup",
  "/signup",
];

const Home = () => {
  const logedIn = useAtomValue(isLogedIn);

  return (
    <>
      <div className="flex md:flex-row flex-col p-8 mt-20 w-[80%] max-w-3xl mx-auto bg-[#d9d9d9] rounded-xl items-center gap-4 ">
        <div className="flex flex-col justify-around items-start min-h-64 gap-4">
          <h1 className="text-xl italic font-medium text-black font-serif ">
            Every problem has a solution in our site
          </h1>
          <p className="text-black font-sans">
            We will be your first choice when you face any problem with your day
            and you will find your solution and more, ask and answer questions
            to gain more points,every month the first in the
            <b> Rank </b> will gain a badge <b> Hero of the month</b>.
          </p>
          {!logedIn && (
            <Link
              to="/signup"
              className="bg-black text-gray-100 italic ml-4 rounded-2xl font-serif px-3 py-2"
            >
              Sign Up
            </Link>
          )}
        </div>
        <img className="w-64" src={Lamp} alt="Lamp Icon" />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 justify-center text-center items-center w-fit max-w-[900px] mx-auto">
        {categoryNames.map((category, index) => {
          const backgroundColor = index % 2 === 0 ? "black" : "white";
          const textColor = index % 2 === 0 ? "gray-100" : "black";

          return (
            <CategoryLink
              name={category}
              href={categoryLinks[index]}
              icon={categoryIcons[index]}
              backgroundColor={backgroundColor}
              textColor={textColor}
              key={index}
            />
          );
        })}
      </div>
      <h2 className="text-center text-[40px] font-['Inter'] mt-40 mx-auto">
        About Our Website...
      </h2>
      <div className="max-w-[650px] text-lg font-light text-center italic mx-auto px-5 mt-5 mb-40">
        On our platform, we strive to solve all the challenges individuals face
        in society by encouraging everyone to share their problems, find
        solutions that benefit all, and provide comments and feedback to
        evaluate the effectiveness of these solutions. We hope that our platform
        succeeds in addressing all types of problems people encounter, whether
        in work or life, and <b>we wish you a pleasant experience</b>
        <span className="not-italic">😊</span>
      </div>
    </>
  );
};

export default Home;

const CategoryLink = ({ name, href, icon, backgroundColor, textColor }) => {
  return (
    <Link
      to={href}
      className={`flex justify-center items-center py-12 w-72 gap-2 mx-auto rounded-2xl font-semibold border-2 border-black text-black hover:opacity-80 transition-all bg-${backgroundColor} text-${textColor}`}
    >
      <img className="w-5" src={icon} alt="Category Icon" />
      <h1>{name}</h1>
      <img
        className="w-5"
        src={textColor == "gray-100" ? WhiteArrow : BlackArrow}
        alt="Arrow Icon"
      />
    </Link>
  );
};
