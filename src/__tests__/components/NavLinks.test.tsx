import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import NavLinks from "@/components/NavLinks";

describe("NavLinks", () => {
  const renderWithRouter = (initialRoute: string = "/") => {
    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <ul>
          <NavLinks />
        </ul>
      </MemoryRouter>
    );
  };

  test("renders all navigation links", () => {
    renderWithRouter();

    const linkTexts = [
      "Home",
      "Skills And Experience",
      "Career Background",
      "Contact",
    ];

    linkTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    // total number of links should match array length
    expect(screen.getAllByRole("link")).toHaveLength(linkTexts.length);
  });

  test("each link has the correct href", () => {
    renderWithRouter();

    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByText("Skills And Experience")).toHaveAttribute(
      "href",
      "/skillsandexperience"
    );
    expect(screen.getByText("Career Background")).toHaveAttribute(
      "href",
      "/careerbackground"
    );
    expect(screen.getByText("Contact")).toHaveAttribute("href", "/contact");
  });

  test("applies active state to the current route", () => {
    renderWithRouter("/contact");

    const contactLink = screen.getByText("Contact");
    // By default, NavLink sets aria-current="page" for the active route
    expect(contactLink).toHaveAttribute("aria-current", "page");
  });
});
