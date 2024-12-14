import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useAtomValue } from "jotai";
import { isLogedIn } from "./atoms";

import Home from "./Pages/Home"
import Questions from "./Pages/Questions";
import Faqs from "./Pages/Faqs";
import NoPage from "./Pages/NoPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";



import "./styles/App.css";
import Answer from "./Pages/Answer";
import Header from "./components/Header";



function App() {

	const logedIn = useAtomValue(isLogedIn);
	
	return (
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

			<Route path="/questions/:id" element={<Answer />} />

			</Route>
		</Routes>
		</BrowserRouter>
	);
  }

const Layout = () => {


  
	return (
		<>
		<Header />
		<Outlet />
		</>
	)
};

export default App;
