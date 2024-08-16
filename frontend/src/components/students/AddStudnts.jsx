import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddStudents = () => {
  const { year } = useParams();
  const [rollNo, setRollno] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDob] = useState("");
  const [standard, setStandard] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (year === "fy") {
      setStandard("FY_IT");
    } else if (year === "sy") {
      setStandard("SY_IT");
    } else if (year === "ty") {
      setStandard("TY_IT");
    }
  }, []);

  let studentData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    studentData = {
      rollNo,
      name,
      number,
      dob,
      standard,
    };
    try {
      await axios.post(
        `http://localhost:8080/api/${year}/addstudent`,
        studentData
      );
      navigate(`/students/${year}`);
      console.log(studentData);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
      console.log(studentData);
    }
  };

  return (
    <div className="text-white px-16 py-6 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center flex-col text-white py-10 bg-slate-700 md:w-10/12 w-11/12 rounded-xl">
        <h1 className="text-4xl font-bold text-slate-200 mb-6">Add Students</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-11/12">
          <label htmlFor="rollNo" className="text-slate-200">
            Roll No
          </label>
          <input
            type="number"
            name="rollNo"
            required
            id="rollNo"
            onChange={(e) => setRollno(e.target.value)}
            placeholder="Enter Roll No"
            className="border-b-2 border-slate-500 bg-transparent outline-none pr-2 py-1 mb-3 text-white caret-red-600"
          />
          <label htmlFor="name" className="text-slate-200">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="border-b-2 border-slate-500 bg-transparent outline-none pr-2 py-1 mb-3 text-white caret-red-600"
          />
          <label htmlFor="number" className="text-slate-200">
            Mob. Number
          </label>
          <input
            type="number"
            name="number"
            required
            id="number"
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter number"
            className="border-b-2 border-slate-500 bg-transparent outline-none pr-2 py-1 mb-3 text-white caret-red-600"
          />
          <label htmlFor="dob" className="text-slate-200">
            DOB
          </label>
          <input
            type="date"
            name="dob"
            required
            id="dob"
            onChange={(e) => setDob(e.target.value)}
            className="border-b-2 border-slate-500 bg-transparent outline-none pr-2 py-1 mb-3 text-white caret-red-600"
          />
          <p className="mt-2 text-red-400">{error && error}</p>
          <button
            type="submit"
            className="border text-2xl py-1 bg-emerald-800 rounded font-semibold mt-4 hover:bg-emerald-950 transition"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudents;
