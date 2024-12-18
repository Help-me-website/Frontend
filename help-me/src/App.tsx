import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useAtomValue } from "jotai";
import {
  isLogedIn,
  welcome,
  showLogoutModal,
  showdeleteAccount,
} from "./atoms";

import Home from "./Pages/Home";
import Questions from "./Pages/Questions";
import Faqs from "./Pages/Faqs";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Answer from "./Pages/Answer";
import Profile from "./Pages/Profile";
import EditPage from "./Pages/EditPage";
import Favorites from "./Pages/Favorites";
import History from "./Pages/History";
import Notifications from "./Pages/Notifications";
import NoPage from "./Pages/NoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./Pages/Welcome";

import "./styles/App.css";
import LogoutModal from "./components/LogoutModal";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const logedIn = useAtomValue(isLogedIn);
  const Welcoming = useAtomValue(welcome);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="questions" element={<Questions />} />
          <Route path="faq" element={<Faqs />} />
          {logedIn ? (
            <>
              <Route path="profile" element={<Profile />} />
              <Route path="profile/edit" element={<EditPage />} />
              <Route path="/profile/favorites" element={<Favorites />} />
              <Route path="/profile/history" element={<History />} />
              <Route
                path="/profile/notifications"
                element={<Notifications />}
              />
            </>
          ) : (
            <>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </>
          )}
          <Route path="*" element={<NoPage />} />
          <Route path="/questions/:id" element={<Answer />} />

          {Welcoming && <Route path="/welcome" element={<Welcome />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  const logoutModal = useAtomValue(showLogoutModal);
  const deleteAccount = useAtomValue(showdeleteAccount);
  return (
    <>
      <div className="min-h-[85vh]">
        <Header />
        <ScrollToTopButton />
        {(logoutModal || deleteAccount) && <LogoutModal />}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
