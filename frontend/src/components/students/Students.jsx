import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Students = () => {
  const { year } = useParams();
  const [error, setError] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/${year}/students`
        );
        setStudents(response.data);
      } catch (error) {
        setError(error.response?.data?.message || "Class not found");
      } finally {
        setLoading(false);
      }
    };

    if (year) {
      fetchStudents();
    } else {
      setError("No standard provided");
      console.log(year);
      setLoading(false);
    }
  }, []);

  let standard;
  if (year === "fy") {
    standard = "FY_IT";
  } else if (year === "sy") {
    standard = "SY_IT";
  } else if (year === "ty") {
    standard = "FY_IT";
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="text-2xl text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="text-2xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        {standard} Students
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {students.length > 0 ? (
          students.map((student) => (
            <div
              key={student.rollNo}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-semibold text-white mb-4">
                {student.name}
              </h2>
              <p className="text-gray-400">
                <span className="font-bold">Roll No:</span> {student.rollNo}
              </p>
              <p className="text-gray-400">
                <span className="font-bold">Number:</span> {student.number}
              </p>
              <p className="text-gray-400">
                <span className="font-bold">Date of Birth:</span> {student.dob}
              </p>
            </div>
          ))
        ) : (
          <div className="text-white col-span-full text-center">
            No students found
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;
