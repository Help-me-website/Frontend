import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { isLogedIn, email, password, welcome } from "../atoms";
import { useAtom, useSetAtom } from "jotai";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  const setLogedIn = useSetAtom(isLogedIn);
  const Welcome = useSetAtom(welcome);
  const [Email, setEmail] = useAtom(email);
  const [Password, setPassword] = useAtom(password);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!Email || !Password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();
      const { token, firstName, lastName } = data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("email", Email);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("isLoggedIn", "true");
      setSuccess("Login successful! Redirecting to Homepage...");
      setError("");

      setEmail("");
      setPassword("");
      setLogedIn(true);

     
      navigate("/");    
      // Welcome(false);
      
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during login.");
    }
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-center my-6 text-gray-800">
        Login
      </h2>
      <form
        className="flex flex-col w-[80%] mx-auto max-w-[500px] bg-white p-8 shadow-md border-primary-200 border-[3px] rounded-xl"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          ></Input>
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          ></Input>
        </div>
        <p className="text-sm mb-3 opacity-80">
          Don't have an account?
          <Link to="/signup" className="ml-1 text-[#005eff] underline">
            Signup
          </Link>
        </p>
        <Button
          variation={1}
          className="w-24 py-1 mx-auto text-center rounded-3xl bg-[var(--darkcolor)] text-[var(--lightcolor)]"
        >
          Login
        </Button>
        {error && <p className="text-[#cb2f2f] text-center mt-4">{error}</p>}
        {success && (
          <p className="text-[#28a745] text-center mt-4">{success}</p>
        )}
      </form>
    </>
  );
};

export default Login;