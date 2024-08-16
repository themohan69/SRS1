import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// icon
import { PiStudentFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = async() => {
    const isLogin = () => !!localStorage.getItem("authToken");
    if (isLogin) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center px-5 bg-slate-950 text-white sticky top-0">
        <div
          className="flex justify-center cursor-pointer items-center"
          onClick={() => navigate("/")}
        >
          <PiStudentFill className="text-6xl text-cyan-300 shadow-md" />
          <b className="text-2xl font-thin">Solker College</b>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            className="text-xl bg-green-400 font-bold hover:bg-green-600 transition-all px-4 py-2 rounded"
            onClick={handleLogin}
          >
            <FaUserTie />
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
