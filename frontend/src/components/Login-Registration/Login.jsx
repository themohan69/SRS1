import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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
      window.location.href = "/profile";
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center md:mt-20 mt-6 font-serif">
      <div className="flex justify-center items-center flex-col text-white p-24 bg-slate-700 md:w-1/3 w-2/3 rounded-xl">
        <h1 className="text-4xl pb-6 font-bold">Login</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-slate-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Enter your email"
            className="border-b-2 border-slate-500 bg-transparent outline-none pr-2 py-1 text-white caret-red-600"
          />
          <label htmlFor="password" className="text-slate-200 mt-3">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Enter your password"
            className="border-b-2 border-slate-500 bg-transparent outline-none pr-2 py-1 text-white caret-red-600"
          />
          {error && <p className="mt-2 text-red-600">{error}</p>}
          <p className="text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-cyan-500 font-semibold hover:text-cyan-700 hover:underline"
            >
              Create one
            </Link>
          </p>
          <button
            type="submit"
            className="border text-2xl py-1 bg-emerald-800 rounded font-semibold mt-4 hover:bg-emerald-950 transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
