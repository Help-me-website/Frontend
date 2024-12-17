import { useSetAtom } from "jotai";
import { isLogedIn, showLogoutModal } from "../atoms";
import { useNavigate } from "react-router-dom";

export default function LogoutModal() {
  const setShowModal = useSetAtom(showLogoutModal);
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
    navigate("/");
    setShowModal(false);
    
  };

  return (
    <div>
      <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-background-100 p-6 rounded-2xl border-2 border-primary-200 shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">Confirm Logout</h3>
          <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
          <div className="flex justify-around">
            <button
              onClick={handleConfirmLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-[#b12929] transition-all duration-200"
            >
              Yes, Logout
            </button>
            <button
              onClick={() => setShowModal(false)}
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
