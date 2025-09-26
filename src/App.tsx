import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import SkillsAndExperience from "./pages/SkillsAndExperience";
import CareerBackground from "./pages/CareerBackground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />,
      },
      {
        path: "skillsandexperience",
        element: <SkillsAndExperience />,
        errorElement: <Error />,
      },
      {
        path: "careerbackground",
        element: <CareerBackground />,
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
