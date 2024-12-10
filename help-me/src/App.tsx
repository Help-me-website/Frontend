import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import { isLogedIn, darkMode } from "./atoms";
import "./App.css";
import Home from "./Pages/Home"
import Questions from "./Pages/Questions";
import Faqs from "./Pages/Faqs";
import NoPage from "./Pages/NoPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import homeIcon from "../public/home-svgrepo-com.svg";
import questionIcon from "../public/question-circle-svgrepo-com.svg";
import faqIcon from "../public/faq.svg";
import profileIcon from "../public/profile-1341-svgrepo-com.svg";
import darkIcon from "../public/Frame.svg"


function App() {

  const logedIn = useAtomValue(isLogedIn);
  
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="questions" element={<Questions />} />
          <Route path="faq" element={<Faqs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {
            logedIn ? 
            <Route path="profile" element={<Profile />} /> : 
            <Route path="*" element={<NoPage />} />
          }
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>);
    
  }

const Layout = () => {

  const logedIn = useAtomValue(isLogedIn);
  const [dark, setDark] = useAtom(darkMode);
  
  return (
    <>
      <header className="flex flex-row items-center justify-between p-4 bg-gray-100 border-b border-solid border-black">
        <h1 className="text-xl font-bold italic flex flex-1">Help-me!</h1>
        <nav className="flex flex-row flex-3 gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={homeIcon} className="w-5" alt="Home Icon" />
            <span>Home</span>
          </Link>
          <Link to="/questions" className="flex items-center gap-2">
            <img src={questionIcon} className="w-5" alt="Questions Icon" />
            <span>Questions</span>
          </Link>
          <Link to="/faq" className="flex items-center gap-2">
            <img src={faqIcon} className="w-5" alt="Faq Icon" />
            <span>FAQ</span>
          </Link>
        </nav>

        <div className="flex flex-1 justify-end gap-4">
          {
            !logedIn ?
            <div className="flex gap-4">
              <Link 
                to="/login" 
                className="w-24 py-1 text-center rounded-3xl bg-[var(--darkcolor)] text-[var(--lightcolor)]">
                Login
              </Link>
              <Link 
                to="/signup" 
                className="w-24 py-1 text-center rounded-3xl border-2 border-[var(--darkcolor)] border-solid bg-[var(--lightcolor)] text-[var(--darkcolor)]">
                Sign up
              </Link>
            </div> :
            <Link
              to="/profile"
              className="w-6"
              >
                <img 
                  className="w-6"
                  src={profileIcon} 
                  alt="Profile Icon"
                ></img>
            </Link>
          }
          <button
            className="w-6"
            // onClick={}
          >
            <img 
              src={darkIcon} 
              alt="Dark Mode Icon"/>
          </button>
        </div>
      </header>
      <Outlet />
    </>
  )
};

export default App;
