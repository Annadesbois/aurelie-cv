import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "@/pages/HomeLayout";
import Error from "@/pages/Error";
import Landing from "@/pages/Landing";
import SkillsAndExperience from "@/pages/SkillsAndExperience";
import CareerBackground from "@/pages/CareerBackground";

export const router = createBrowserRouter([
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
