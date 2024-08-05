import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [teacher, setTeacher] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacher = async () => {
        setError("start");
      const token = localStorage.getItem("authTeach");
      if (token) {
        const response = await axios.get(
          `http://localhost:8080/api/teacher/profile`,
          {
            headers: { "auth-token": token },
          }
        );
        setTeacher(response.data);
        try {
        } catch (error) {
          setError("Login again");
        }
      }
    };
    fetchTeacher();
  }, []);

  return (
    <div className="text-white">
      <h1>Hello {teacher.name}</h1>
      <button onClick={localStorage.removeItem("authToken")}>Logout</button>
      {error && <p>{"Error: "}{error}</p>}
    </div>
  );
};

export default Profile;
