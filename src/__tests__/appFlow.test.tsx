import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  createMemoryRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import { describe, test, expect, vi, beforeEach } from "vitest";

import HomeLayout from "@/pages/HomeLayout";
import ErrorPage from "@/pages/Error";
import Landing from "@/pages/Landing";
import SkillsAndExperience from "@/pages/SkillsAndExperience";
import CareerBackground from "@/pages/CareerBackground";
import Contact from "@/pages/Contact";

beforeEach(() => {
  if (!("scrollTo" in window)) {
    // @ts-expect-error adding on JSDOM
    window.scrollTo = vi.fn();
  } else {
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  }
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Landing />, errorElement: <ErrorPage /> },
      {
        path: "skillsandexperience",
        element: <SkillsAndExperience />,
        errorElement: <ErrorPage />,
      },
      {
        path: "careerbackground",
        element: <CareerBackground />,
        errorElement: <ErrorPage />,
      },
      { path: "contact", element: <Contact />, errorElement: <ErrorPage /> },
    ],
  },
];

describe("App flows (integration)", () => {
  test("user can navigate from Landing to Skills & Experience, then to Career Background via Navbar", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    render(<RouterProvider router={router} />);

    expect(await screen.findByText("Aurelie Burrows,")).toBeInTheDocument();

    await user.click(
      screen.getByRole("link", { name: /go to skills & experience/i })
    );
    expect(
      await screen.findByRole("heading", { name: /skills & experience/i })
    ).toBeInTheDocument();

    await user.click(
      screen.getAllByRole("link", { name: /career background/i })[0]
    );
    expect(
      await screen.findByRole("heading", { name: /career background/i })
    ).toBeInTheDocument();
  });

  test("theme toggle sets data-theme and persists while navigating", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    render(<RouterProvider router={router} />);

    const checkbox = await screen.findByRole("checkbox", {
      name: /toggle dark mode/i,
    });
    await user.click(checkbox);

    expect(document.documentElement).toHaveAttribute("data-theme", "forest");
    expect(localStorage.getItem("theme")).toBe("forest");

    await user.click(screen.getAllByRole("link", { name: /contact/i })[0]);
    expect(
      await screen.findByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("data-theme", "forest");
  });
});
