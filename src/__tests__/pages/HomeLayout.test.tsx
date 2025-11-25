import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import HomeLayout from "@/pages/HomeLayout";

vi.mock("../../components", () => ({
  Navbar: () => <div>Mock Navbar</div>,
  Loading: () => <div>Mock Loading</div>,
}));

vi.mock("react-router-dom", () => ({
  useNavigation: vi.fn(),
  useLocation: vi.fn(),
  Outlet: () => <div>Mock Outlet</div>,
}));

import {
  useNavigation,
  useLocation,
  type Navigation,
  type Location,
} from "react-router-dom";

const navState = (state: Navigation["state"]) =>
  ({ state } as unknown as Navigation);

const locPath = (pathname: string) => ({ pathname } as unknown as Location);

describe("HomeLayout", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders Navbar and Outlet when navigation is idle", () => {
    vi.mocked(useNavigation).mockReturnValue(navState("idle"));
    vi.mocked(useLocation).mockReturnValue(locPath("/"));

    render(<HomeLayout />);

    expect(screen.getByText("Mock Navbar")).toBeInTheDocument();
    expect(screen.getByText("Mock Outlet")).toBeInTheDocument();
    expect(screen.queryByText("Mock Loading")).not.toBeInTheDocument();
  });

  test("renders Navbar and Loading when navigation is 'loading'; renders Outlet when 'idle'", () => {
    // loading -> shows Loading, not Outlet
    vi.mocked(useNavigation).mockReturnValueOnce(navState("loading"));
    vi.mocked(useLocation).mockReturnValueOnce(locPath("/"));
    const { rerender } = render(<HomeLayout />);
    expect(screen.getByText("Mock Navbar")).toBeInTheDocument();
    expect(screen.getByText("Mock Loading")).toBeInTheDocument();
    expect(screen.queryByText("Mock Outlet")).not.toBeInTheDocument();

    // idle -> shows Outlet, not Loading
    vi.mocked(useNavigation).mockReturnValueOnce(navState("idle"));
    vi.mocked(useLocation).mockReturnValueOnce(locPath("/"));
    rerender(<HomeLayout />);
    expect(screen.getByText("Mock Outlet")).toBeInTheDocument();
    expect(screen.queryByText("Mock Loading")).not.toBeInTheDocument();
  });

  test("calls window.scrollTo(0, 0) when pathname changes", () => {
    const scrollSpy = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    vi.mocked(useNavigation).mockReturnValue(navState("idle"));
    vi.mocked(useLocation).mockReturnValue(locPath("/"));
    const { rerender } = render(<HomeLayout />);

    vi.mocked(useNavigation).mockReturnValue(navState("idle"));
    vi.mocked(useLocation).mockReturnValue(locPath("/next"));
    rerender(<HomeLayout />);

    expect(scrollSpy).toHaveBeenCalledWith(0, 0);
    scrollSpy.mockRestore();
  });
});
