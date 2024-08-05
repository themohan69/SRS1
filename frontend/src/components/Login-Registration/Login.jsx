import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("authTeach");
      const res = await axios.post(`http://localhost:8080/api/teacher/login`, {
        email,
        password,
      });
      localStorage.setItem("authToken", res.data.token);
      navigate("/profile");
    } catch (error) {
      setError("Invailid name or password");
    }
  };

  return (
    <div className="flex justify-center items-center md:mt-20 mt-6 font-serif">
      <div className="flex justify-center items-center flex-col text-black p-24 bg-white md:w-1/3 w-2/3 rounded-xl ">
        <h1 className="text-4xl pb-6 font-bold">Login</h1>
        <form className="flex flex-col gap-2" action="" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-slate-600">
            Name
          </label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Enter your email"
            className="border-b-2 border-black outline-none pr-2 py-1 text-black caret-red-600"
          />
          <label htmlFor="pass" className="text-slate-600 mt-3">
            Password
          </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
            placeholder="Enter your password"
            className="border-b-2 border-black outline-none pr-2 py-1  text-black caret-red-600"
          />
          <p className="mt-2 text-red-600">{error && error}</p>
          <p
            className="mt-2 cursor-pointer border-b-2 border-cyan-400"
            onClick={() => navigate("/register")}
          >
            I don't have a registered account
          </p>
          <button
            type="submit"
            className="border text-2xl py-1 bg-emerald-500 rounded font-semibold mt-4 hover:bg-emerald-800 transition "
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
