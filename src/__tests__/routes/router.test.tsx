// src/router/Router.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import {
  createMemoryRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

import HomeLayout from "../../pages/HomeLayout";
import Error from "../../pages/Error";
import Landing from "../../pages/Landing";
import SkillsAndExperience from "../../pages/SkillsAndExperience";
import CareerBackground from "../../pages/CareerBackground";
import Contact from "../../pages/Contact";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, errorElement: <Error /> },
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
      { path: "contact", element: <Contact />, errorElement: <Error /> },
    ],
  },
];

describe("Router", () => {
  test.each([
    [
      "/",
      async () => {
        expect(await screen.findByText("Aurelie Burrows,")).toBeInTheDocument();
      },
    ],
    [
      "/skillsandexperience",
      async () => {
        expect(
          await screen.findByRole("heading", { name: /skills & experience/i })
        ).toBeInTheDocument();
      },
    ],
    [
      "/careerbackground",
      async () => {
        expect(
          await screen.findByRole("heading", { name: /career background/i })
        ).toBeInTheDocument();
      },
    ],
    [
      "/contact",
      async () => {
        expect(
          await screen.findByRole("heading", { name: /contact/i })
        ).toBeInTheDocument();
      },
    ],
  ] as const)("renders %s", async (path, assertFn) => {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
    await assertFn();
  });

  test("renders 404 for unknown path", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/nope"] });
    render(<RouterProvider router={router} />);
    expect(await screen.findByText("404")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /go back home/i })).toHaveAttribute(
      "href",
      "/"
    );
  });
});
