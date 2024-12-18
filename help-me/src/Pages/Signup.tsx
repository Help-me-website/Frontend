import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { isLogedIn, welcome } from "../atoms";
import { useSetAtom } from "jotai";
import Button from "../components/Button";
import Input from "../components/Input";

const Signup = () => {
  const setLogedIn = useSetAtom(isLogedIn);
  const Welcome = useSetAtom(welcome);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!FirstName || !LastName || !Email || !Password) {
      setError("Please complete all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: FirstName,
          lastName: LastName,
          email: Email,
          password: Password,
        }),
      });

      if (!response.ok) {
        throw new Error("Signup failed. Please try again.");
      }

      const data = await response.json();
      const { token } = data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("email", Email);
      localStorage.setItem("firstName", FirstName);
      localStorage.setItem("lastName", LastName);
      localStorage.setItem("isLoggedIn", "true");
      setSuccess("Signup successful! Redirecting to Homepage...");
      setError("");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      setLogedIn(true);

      Welcome(true);
      setTimeout(() => navigate("/welcome"), 2000);
      Welcome(false);

    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred during signup.");
    }
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-center my-6 text-gray-800">
        Signup
      </h2>
      <form
        className="flex flex-col w-[80%] mx-auto mb-20 max-w-[500px] bg-white p-8 shadow-md border-primary-200 border-[3px] rounded-xl"
        onSubmit={handleSignup}
      >
        <div className="mb-4">
          <label
            htmlFor="firstname"
            className="block text-gray-700 font-medium mb-2"
          >
            First Name
          </label>
          <Input
            type="text"
            id="firstname"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          ></Input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastname"
            className="block text-gray-700 font-medium mb-2"
          >
            Last Name
          </label>
          <Input
            type="text"
            id="lastname"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          ></Input>
        </div>
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
          Already have an account?
          <Link to="/login" className="ml-1 text-[#005eff] underline">
            Login
          </Link>
        </p>
        <Button
          variation={1}
          className="w-24 py-1 mx-auto text-center rounded-3xl bg-[var(--darkcolor)] text-[var(--lightcolor)]"
        >
          Signup
        </Button>
        {error && <p className="text-[#cb2f2f] text-center mt-4">{error}</p>}
        {success && (
          <p className="text-[#28a745] text-center mt-4">{success}</p>
        )}
      </form>
    </>
  );
};

export default Signup;
