import { useState, useEffect } from "react";
import { useSetAtom } from "jotai";
import { isLogedIn } from "../atoms";
import { useNavigate } from "react-router-dom";
import ProfileNavbar from "../components/ProfileNavbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { json } from "stream/consumers";

export default function EditPage() {
  const navigate = useNavigate();
  const logout = useSetAtom(isLogedIn);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isFirstnameEditable, setIsFirstnameEditable] = useState(false);
  const [isLastnameEditable, setIsLastnameEditable] = useState(false);

  const toggleFirstnameEdit = () => setIsFirstnameEditable((prev) => !prev);
  const toggleLastnameEdit = () => setIsLastnameEditable((prev) => !prev);


  const token = localStorage.getItem("authToken");

  // Fetch user profile (GET endpoint)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log(token);
        const response = await fetch("http://localhost:8080/user/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile.");
        }

        const data = await response.json();
        localStorage.setItem("userData", JSON.stringify(data));
        setFirstname(data.firstName);
        setLastname(data.lastName);
        setEmail(data.email);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [token]);

  // Save updated user data (PUT endpoint)
  const saveChanges = async () => {
    try {
      // Get user data from localStorage
      const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  
      // Prepare updated user data
      const firstName = firstname; // Updated firstname from input state
      const lastName = lastname;   // Updated lastname from input state
      const newUserData = { ...userData, firstName, lastName };
  
      console.log("Updated user data:", newUserData);
  
      // Send the updated data to the backend
      const response = await fetch("http://localhost:8080/user/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData), // Fix: Convert object to JSON string
      });
  
      if (!response.ok) {
        throw new Error("Failed to save changes.");
      }
  
      const data = await response.json();
  
      // Update localStorage and React state
      localStorage.setItem("userData", JSON.stringify(data));
      alert("Changes saved successfully!");
      setFirstname(data.firstName);
      setLastname(data.lastName);
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Failed to save changes.");
    }
  };
  

  // Delete user (DELETE endpoint)
  const deleteUser = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Retrieve the token from localStorage
      const response = await fetch("http://localhost:8080/user/profile", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token as Authorization header
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete user.");
      }
  
      alert("User deleted successfully.");
      // Log the user out after successful deletion
      handleConfirmLogout();
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };
  
  const handleConfirmLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("authToken");
    logout(false); // Assuming you have a logout function to manage state globally
    navigate("/"); // Redirect to home or login page after deletion
  };
  

  return (
    <>
      <ProfileNavbar />
      <div className="flex flex-col gap-5 p-5 bg-text-100 w-[90%] rounded-[35px] mx-auto max-w-[600px]">
        <div className="flex justify-between">
          <h2 className="text-3xl">Profile Details</h2>
          <span
            onClick={() => setShowLogoutModal(true)}
            className="flex gap-2 text-text-950 items-center transition-all duration-300 cursor-pointer icon-hover"
          >
            <Icon icon="majesticons:logout-line" className="w-8 h-8" />
            Logout
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label className="block mb-1 ml-4">Firstname</label>
            <div className="flex justify-between items-center gap-5">
              <input
                title="Firstname"
                type="text"
                value={firstname}
                disabled={!isFirstnameEditable}
                onChange={(e) => setFirstname(e.target.value)}
                className={`w-full max-w-[450px] px-3 py-2 outline-none rounded-3xl ${
                  !isFirstnameEditable ? "bg-text-50" : "bg-text-200"
                }`}
              />
              <button
                onClick={toggleFirstnameEdit}
                className="h-fit border px-4 py-1 rounded-2xl text-md hover:bg-gray-200"
              >
                {isFirstnameEditable ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label className="block mb-1 ml-4">Lastname</label>
            <div className="flex justify-between items-center gap-5">
              <input
                title="Lastname"
                type="text"
                value={lastname}
                disabled={!isLastnameEditable}
                onChange={(e) => setLastname(e.target.value)}
                className={`w-full max-w-[450px] px-3 py-2 outline-none rounded-3xl ${
                  !isLastnameEditable ? "bg-text-50" : "bg-text-200"
                }`}
              />
              <button
                onClick={toggleLastnameEdit}
                className="h-fit border px-4 py-1 rounded-2xl text-md hover:bg-gray-200"
              >
                {isLastnameEditable ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-1 ml-4">Email</label>
          <p className="opacity-70 ml-5">{email}</p>
        </div>

        <button
          onClick={saveChanges}
          className="w-fit bg-background-500 text-white py-2 px-5 rounded-3xl hover:bg-background-400 transition-all duration-200"
        >
          Save changes
        </button>

        <button
          onClick={deleteUser}
          className="w-fit bg-red-500 text-white py-2 px-5 rounded-3xl hover:bg-red-400 transition-all duration-200 mt-4"
        >
          Delete Profile
        </button>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-background-100 p-6 rounded-2xl border-2 border-primary-200 shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-around">
              <button
                onClick={handleConfirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-[#b12929] transition-all duration-200"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-xl hover:bg-[#939393] transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
