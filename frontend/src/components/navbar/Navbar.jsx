import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center px-5 bg-slate-950 text-white sticky top-0">
        <div className="flex justify-center cursor-pointer items-center" onClick={() => navigate("/")}>
          <PiStudentFill className="text-6xl text-cyan-300 shadow-md" />
          <b className="text-2xl">Solker College</b>
        </div>
        <div>
          <button className="text-xl bg-green-400 font-bold hover:bg-green-600 transition-all px-4 py-2 rounded" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
