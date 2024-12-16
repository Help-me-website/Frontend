import { useState } from "react";
import { useSetAtom } from "jotai";
import { isLogedIn } from "../atoms";
import { useNavigate } from "react-router-dom";
import ProfileNavbar from "../components/ProfileNavbar";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function EditPage() {
  const navigate = useNavigate();
  const logout = useSetAtom(isLogedIn);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [name, setName] = useState("55555555555555");
  const [username, setUsername] = useState("Asshole");
  const [email] = useState("ahha@niggerfuck.555");
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);

  const toggleNameEdit = () => setIsNameEditable((prev) => !prev);
  const toggleUsernameEdit = () => setIsUsernameEditable((prev) => !prev);

  const handleConfirmLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("authToken");
    logout(false);
    navigate("/");
  };

  return (
    <>
      <ProfileNavbar />
      <div className="flex flex-col gap-5 p-5 bg-text-100 w-[90%] rounded-[35px] mx-auto max-w-[600px]">
        <div className="flex justify-between">
          <h2 className="text-3xl">Profile details</h2>
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
            <label className="block mb-1 ml-4">Name</label>
            <div className="flex justify-between items-center gap-5">
              <input
                type="text"
                value={name}
                disabled={!isNameEditable}
                onChange={(e) => setName(e.target.value)}
                className={`w-full max-w-[450px] px-3 py-2 outline-none rounded-3xl ${
                  !isNameEditable ? "bg-text-50" : "bg-text-200"
                }`}
              />
              <button
                onClick={toggleNameEdit}
                className="h-fit border px-4 py-1 rounded-2xl text-md hover:bg-gray-200"
              >
                {isNameEditable ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label className="block mb-1 ml-4">Username</label>
            <div className="flex justify-between items-center gap-5">
              <input
                type="text"
                value={username}
                disabled={!isUsernameEditable}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full max-w-[450px] px-3 py-2 outline-none rounded-3xl ${
                  !isUsernameEditable ? "bg-text-50" : "bg-text-200"
                }`}
              />
              <button
                onClick={toggleUsernameEdit}
                className="h-fit border px-4 py-1 rounded-2xl text-md hover:bg-gray-200"
              >
                {isUsernameEditable ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-1 ml-4">Email</label>
          <p className="opacity-70 ml-5">{email}</p>
        </div>

        <button
          onClick={() => alert("Changes Saved")}
          className="w-fit bg-background-500 text-white py-2 px-5 rounded-3xl hover:bg-background-400 transition-all duration-200"
        >
          Save changes
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
