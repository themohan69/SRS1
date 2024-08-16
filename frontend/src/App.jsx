import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HeroPage from "./components/home/HeroPage";
import Footer from "./components/footer/Footer";
import Login from "./components/Login-Registration/Login";
import Register from "./components/Login-Registration/Register";
import Profile from "./components/profile/Profile";
import Students from "./components/students/Students";
import AddStudents from "./components/students/AddStudnts";

const App = () => {
  const isLogin = () => !!localStorage.getItem("authToken");
  const protectedRoute = (element) => {
    return isLogin() ? element : <Navigate to={"/login"} />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <HeroPage />,
          children: [
            {
              path: "",
              element: <Footer />,
            },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "profile",
          element: protectedRoute(<Profile />),
        },
        {
          path: "students/:year",
          element: <Students />,
        },
        {
          path: "student/add/:year",
          element: <AddStudents />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
