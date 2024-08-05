import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HeroPage from "./components/home/HeroPage";
import Footer from "./components/footer/Footer";
import Login from "./components/Login-Registration/Login";
import Register from "./components/Login-Registration/Register";
import Profile from "./components/profile/Profile";

const App = () => {
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
          element: <Profile />,
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
