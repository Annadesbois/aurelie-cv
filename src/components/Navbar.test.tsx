import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe("Navbar", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  test("renders navbar and links", () => {
    renderWithRouter(<Navbar />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    const expectAtLeastOneLink = (name: RegExp) => {
      const links = screen.getAllByRole("link", { name });
      expect(links.length).toBeGreaterThan(0);
    };

    expectAtLeastOneLink(/home/i);
    expectAtLeastOneLink(/skills and experience/i);
    expectAtLeastOneLink(/career background/i);
    expectAtLeastOneLink(/contact/i);
  });

  test("renders the theme toggle checkbox", () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("toggles theme and updates localStorage", async () => {
    renderWithRouter(<Navbar />);
    const user = userEvent.setup();
    const checkbox = screen.getByRole("checkbox");

    // Initially not set by the component
    expect(document.documentElement).not.toHaveAttribute("data-theme");

    await user.click(checkbox);
    expect(document.documentElement).toHaveAttribute("data-theme", "forest");
    expect(localStorage.getItem("theme")).toBe("forest");

    await user.click(checkbox);
    expect(document.documentElement).toHaveAttribute("data-theme", "winter");
    expect(localStorage.getItem("theme")).toBe("winter");
  });
});
