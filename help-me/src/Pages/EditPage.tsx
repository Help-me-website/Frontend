import { useState, useEffect } from "react";
import { useSetAtom } from "jotai";
import { showdeleteAccount, showLogoutModal } from "../atoms";
import ProfileNavbar from "../components/ProfileNavbar";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function EditPage() {
  const logoutModal = useSetAtom(showLogoutModal);
  const deleteAccount = useSetAtom(showdeleteAccount);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [isFirstnameEditable, setIsFirstnameEditable] = useState(false);
  const [isLastnameEditable, setIsLastnameEditable] = useState(false);

  const toggleFirstnameEdit = () => setIsFirstnameEditable((prev) => !prev);
  const toggleLastnameEdit = () => setIsLastnameEditable((prev) => !prev);

  const token = localStorage.getItem("authToken");

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

  const saveChanges = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData") || "{}");

      const firstName = firstname;
      const lastName = lastname;
      const newUserData = { ...userData, firstName, lastName };

      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      console.log("Updated user data:", newUserData);

      const response = await fetch("http://localhost:8080/user/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });

      if (!response.ok) {
        throw new Error("Failed to save changes.");
      }

      const data = await response.json();

      localStorage.setItem("userData", JSON.stringify(data));
      alert("Changes saved successfully!");
      setFirstname(data.firstName);
      setLastname(data.lastName);
      setIsFirstnameEditable(false);
      setIsLastnameEditable(false);
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Failed to save changes.");
    }
  };

  return (
    <>
      <ProfileNavbar />
      <div className="flex flex-col gap-5 p-5 bg-text-100 w-[90%] shadow-md border-primary-200 border-[3px] rounded-xl mx-auto max-w-[600px]">
        <div className="flex justify-between">
          <h2 className="text-3xl">Profile Details</h2>
          <span
            onClick={() => logoutModal(true)}
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

        <div className="flex justify-between">
          <button
            onClick={saveChanges}
            className="w-fit h-fit bg-background-500 text-white py-2 px-5 rounded-3xl hover:bg-background-400 transition-all duration-200"
          >
            Save changes
          </button>
          <button
            className="w-fit h-fit bg-[#c22c2c] text-white py-2 px-5 rounded-3xl hover:opacity-80 transition-all duration-200"
            onClick={() => deleteAccount(true)}
          >
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
}