import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [standard, setStandard] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/api/teacher/register`,
        {
          name,
          email,
          password,
          standard,
        }
      );
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Enter correct data");
    }
  };

  return (
    <div className="flex justify-center items-center md:mt-4 mt-2 font-serif">
      <div className="flex justify-center items-center flex-col text-white px-24 py-10 bg-slate-700 md:w-1/3 w-2/3 rounded-xl">
        <h1 className="text-4xl pb-6 font-bold">Register</h1>
        <form className="flex flex-col gap-2" action="" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-slate-200">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Enter your name"
            className="border-b-2 border-slate-500 outline-none px-2 text-white bg-transparent caret-red-600"
          />
          <label htmlFor="email" className="text-slate-200 mt-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Enter your email"
            className="border-b-2 border-slate-500 outline-none px-2 text-white bg-transparent caret-red-600"
          />
          <label htmlFor="pass" className="text-slate-200 mt-3">
            Password
          </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
            placeholder="Enter your password"
            className="border-b-2 border-slate-500 outline-none px-2 text-white bg-transparent caret-red-600"
          />
          <label htmlFor="code" className="text-slate-200 mt-3">
            Secret Code
          </label>
          <input
            type="text"
            name="code"
            required
            onChange={(e) => setCode(e.target.value)}
            id="code"
            placeholder="Enter your code"
            className="border-b-2 border-slate-500 outline-none px-2 text-white bg-transparent caret-red-600"
          />
          <label htmlFor="standard" className="text-slate-200 mt-3">
            Selec Standard
          </label>
          <div className="text-slate-200">
            <div>
              <input
                type="radio"
                id="fy-it"
                name="standard"
                value="FY_IT"
                checked={standard === "FY_IT"}
                onChange={(e) => setStandard(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="fy-it">FY-IT</label>
            </div>
            <div>
              <input
                type="radio"
                id="sy-ii"
                name="standard"
                value="SY_II"
                checked={standard === "SY_II"}
                onChange={(e) => setStandard(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="sy-it">SY-IT</label>
            </div>
            <div>
              <input
                type="radio"
                id="ty-it"
                name="standard"
                value="TY_IT"
                checked={standard === "TY_IT"}
                onChange={(e) => setStandard(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="ty-it">TY-IT</label>
            </div>
          </div>
          <p className="mt-2 text-red-600">{error && error}</p>
          <p className="text-gray-200">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-cyan-500 font-semibold hover:text-cyan-700 hover:underline"
            >
              Login
            </Link>
          </p>
          <button
            type="submit"
            className="border text-2xl py-1 bg-emerald-800 rounded font-semibold mt-4 hover:bg-emerald-950 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
