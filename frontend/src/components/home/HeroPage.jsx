import { Outlet } from "react-router-dom";

const HeroPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-white flex flex-col justify-center items-center space-y-6 max-w-3xl text-center">
          <h1 className="text-5xl font-extrabold">Welcome to Solker College</h1>
          <p className="text-xl">
            At Solker College, we are committed to providing a high-quality education that empowers our students to achieve their full potential. Our diverse range of programs and dedicated faculty ensure that every student receives personalized attention and the best possible learning experience.
          </p>
          <p className="text-xl">
            Join us and become a part of a vibrant community where innovation meets tradition. Our state-of-the-art facilities and supportive environment will help you thrive both academically and personally.
          </p>
          <p className="text-lg italic text-gray-400">
            "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
          </p>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HeroPage;
