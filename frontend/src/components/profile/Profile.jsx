import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [teacher, setTeacher] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacher = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/teacher/profile`,
            {
              headers: { "auth-token": token },
            }
          );
          setTeacher(response.data);
        } catch (error) {
          setError("Login again");
        }
      } else {
        setError("No token found, please login");
      }
    };
    fetchTeacher();
  }, []);

  let year;
  if (teacher.standard === "FY_IT") {
    year = "fy";
  } else if (teacher.standard === "SY_IT") {
    year = "sy";
  } else if (teacher.standard === "TY_IT") {
    year = "ty";
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <div className="text-white flex flex-col items-center py-8 px-4 transition-all ease-in-out">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-lg font-semibold mb-2">
          <b>Name:</b> {teacher.name}
        </p>
        <p className="text-lg font-semibold mb-2">
          <b>Email:</b> {teacher.email}
        </p>
        <p className="text-lg font-semibold mb-4">
          <b>Class:</b> {teacher.standard}
        </p>
        <div className="flex flex-col gap-4 mb-4">
          <button
            onClick={() => navigate(`/students/${year}`)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Students
          </button>
          <button
            onClick={() => navigate(`/student/add/${year}`)}
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded"
          >
            Add Student
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Result
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
            New Result
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="text-red-400 hover:text-red-500 font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
