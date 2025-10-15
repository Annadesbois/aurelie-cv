import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import Landing from "./Landing";

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe("Landing", () => {
  test("renders the profile image with correct alt text", () => {
    renderWithRouter(<Landing />);
    const image = screen.getByAltText("Profile picture");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });

  test("renders the main heading with name and title", () => {
    renderWithRouter(<Landing />);
    expect(screen.getByText("Aurelie Burrows,")).toBeInTheDocument();
    expect(screen.getByText("Front-End Developer")).toBeInTheDocument();
  });

  test("renders the introduction text", () => {
    renderWithRouter(<Landing />);
    expect(screen.getByText("Hello,")).toBeInTheDocument();
    expect(
      screen.getByText(/I'm a front-end developer focused on building/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I've built a variety of real-world projects/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I enjoy crafting user-focused experiences/i)
    ).toBeInTheDocument();
  });

  test("renders Programming Skills section with heading", () => {
    renderWithRouter(<Landing />);
    const headings = screen.getAllByText("Programming Skills");
    expect(headings.length).toBeGreaterThan(0);
  });

  test("renders all programming skills from preview list", () => {
    renderWithRouter(<Landing />);
    const expectedSkills = [
      "React",
      "TypeScript",
      "Next.js",
      "React Query (TanStack Query)",
      "Tailwind CSS",
      "Prisma",
      "Vercel",
      "...",
    ];

    expectedSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test("renders Soft Skills section with heading", () => {
    renderWithRouter(<Landing />);
    const headings = screen.getAllByText("Soft Skills");
    expect(headings.length).toBeGreaterThan(0);
  });

  test("renders all soft skills from list", () => {
    renderWithRouter(<Landing />);
    const expectedSoftSkills = [
      "Project management",
      "Teamwork",
      "Problem-solving",
      "Communication",
      "Adaptability",
      "Organisation",
      "Sprint-based workflows",
      "Rapid learning of new tools",
    ];

    expectedSoftSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test("renders navigation link to Skills & Experience page", () => {
    renderWithRouter(<Landing />);
    const link = screen.getByRole("link", {
      name: /go to skills & experience/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/skillsandexperience");
  });

  test("renders navigation link to Career Background page", () => {
    renderWithRouter(<Landing />);
    const link = screen.getByRole("link", {
      name: /go to career background/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/careerbackground");
  });

  test("renders all three main sections", () => {
    const { container } = renderWithRouter(<Landing />);
    const heroSections = container.querySelectorAll(".hero");
    expect(heroSections.length).toBe(3);
  });

  test("renders correct number of list items", () => {
    renderWithRouter(<Landing />);
    const listItems = screen.getAllByRole("listitem");
    // 8 programming skills + 8 soft skills = 16 total
    expect(listItems).toHaveLength(16);
  });
});
