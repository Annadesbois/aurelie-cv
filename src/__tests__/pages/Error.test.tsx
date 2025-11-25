import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import {
  createMemoryRouter,
  RouterProvider,
  type RouteObject,
  type LoaderFunction,
} from "react-router-dom";
import Error from "@/pages/Error";

describe("Error page", () => {
  test("renders 404 view with a back-home link when a 404 route error occurs", async () => {
    const notFoundLoader: LoaderFunction = async () => {
      throw new Response("", { status: 404 });
    };

    const routes: RouteObject[] = [
      {
        path: "/",
        element: <div />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <div />,
            loader: notFoundLoader,
          },
        ],
      },
    ];

    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    render(<RouterProvider router={router} />);

    expect(await screen.findByText("404")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /page not found/i })
    ).toBeInTheDocument();

    const backLink = screen.getByRole("link", { name: /go back home/i });
    expect(backLink).toHaveAttribute("href", "/");
  });

  test("renders generic error view when a non-404 error occurs", async () => {
    const boomLoader: LoaderFunction = async () => {
      throw new globalThis.Error("boom");
    };

    const routes: RouteObject[] = [
      {
        path: "/",
        element: <div />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <div />,
            loader: boomLoader,
          },
        ],
      },
    ];

    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    render(<RouterProvider router={router} />);

    expect(
      await screen.findByRole("heading", { name: /there was an error/i })
    ).toBeInTheDocument();
  });
});
