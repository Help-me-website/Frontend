import { Link, useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { isLogedIn } from "../atoms";
import Button from "../components/Button";
import Lamp from "../../public/lamp.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

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

const categoryLinks: string[] = [
  "/questions",
  "/questions",
  "/questions",
  "/questions",
  "/questions",
  "/questions",
  "/questions",
  "/questions",
  "/questions",
];

const categoryIcons: string[] = [
  "majesticons:dollar-circle-line",
  "streamline:ai-technology-spark",
  "tdesign:education",
  "mage:heart-health",
  "hugeicons:brain-02",
  "stash:people-group",
  "material-symbols:science-outline-sharp",
  "solar:gamepad-broken",
  "streamline:entertainment-party-popper-hobby-entertainment-party-popper-confetti-event",
];

const Home = () => {
  const logedIn = useAtomValue(isLogedIn);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex md:flex-row flex-col p-8 mt-20 w-[80%] max-w-3xl mx-auto border-primary-200 border-[3px] rounded-xl items-center gap-4 ">
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
            <Button
              variation={2}
              className="w-24 py-1 text-center rounded-3xl bg-[var(--darkcolor)] text-[var(--lightcolor)]"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </Button>
          )}
        </div>
        <img className="w-64" src={Lamp} alt="Lamp Icon" />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 justify-center text-center items-center w-fit max-w-[900px] mx-auto">
        {categoryNames.map((category, index) => {
          return (
            <CategoryLink
              name={category}
              href={categoryLinks[index]}
              icon={categoryIcons[index]}
              key={index}
            />
          );
        })}
      </div>
      <h2 className="text-center text-[40px] font-['Inter'] mt-24 mx-auto">
        About Our Website...
      </h2>
      <div className="max-w-[650px] text-lg font-light text-center italic mx-auto px-5 mt-5 mb-20">
        On our platform, we strive to solve all the challenges individuals face
        in society by encouraging everyone to share their problems, find
        solutions that benefit all, and provide comments and feedback to
        evaluate the effectiveness of these solutions. We hope that our platform
        succeeds in addressing all types of problems people encounter, whether
        in work or life, and
        <span className="font-bold"> we wish you a pleasant experience</span>
        <span className="not-italic">😊</span>
      </div>
    </>
  );
};

export default Home;

const CategoryLink = ({ name, href, icon }) => {
  return (
    <Link
      to={href}
      className={`flex justify-center bg-primary-100 hover:bg-primary-50 duration-100 border-text-200 items-center py-12 w-72 gap-2 mx-auto rounded-2xl font-semibold border-2 border-black text-black hover:opacity-80 hover: transition-all text-text-950`}
    >
      <Icon className="w-5 h-5" icon={icon} />
      <h1>{name}</h1>
      {/* <Icon className="w-5 h-5" icon={"material-symbols:arrow-circle-right-outline-rounded"}></Icon> */}
    </Link>
  );
};
