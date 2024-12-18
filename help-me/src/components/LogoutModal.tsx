import { useAtom, useSetAtom } from "jotai";
import { isLogedIn, showdeleteAccount, showLogoutModal } from "../atoms";
import { useNavigate } from "react-router-dom";

export default function LogoutModal() {
  const [showModal, setShowModal] = useAtom(showLogoutModal);
  const [showdeleteAccountModal, setShowDeleteAccountModa] =
    useAtom(showdeleteAccount);
  const setLogout = useSetAtom(isLogedIn);
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("authToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("userData");
    setLogout(false);
    setShowModal(false);
    setShowDeleteAccountModa(false);
    navigate("/");
  };
  const deleteUser = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch("http://localhost:8080/user/profile", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete user.");
      }

      alert("User deleted successfully.");
      handleConfirmLogout();
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  return (
    <div>
      <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-background-100 p-6 rounded-2xl border-2 border-primary-200 shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">
            {showModal ? "Confirm Logout" : "Confirm Delete Account"}
          </h3>
          <p className="text-gray-600 mb-6">{`Are you sure you want to ${
            showModal ? "Logout" : "delete your account"
          }`}</p>
          <div className="flex justify-around">
            <button
              onClick={showModal ? handleConfirmLogout : deleteUser}
              className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-[#b12929] transition-all duration-200"
            >
              {showModal ? "Yes, Logout" : "Yes, Delete"}
            </button>
            <button
              onClick={() => {
                setShowModal(false);
                setShowDeleteAccountModa(false);
              }}
              className="px-4 py-2 bg-gray-300 text-black rounded-xl hover:bg-[#939393] transition-all duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}