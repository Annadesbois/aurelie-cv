import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import SkillsAndExperience from "@/pages/SkillsAndExperience";
import {
  skillList,
  experienceList,
  certificationsList,
} from "../../data/skillsAndExperienceData";

describe("SkillsAndExperience", () => {
  test("renders main page heading", () => {
    render(<SkillsAndExperience />);
    expect(
      screen.getByRole("heading", { name: /skills & experience/i })
    ).toBeInTheDocument();
  });

  test("renders the three section headings", () => {
    render(<SkillsAndExperience />);
    expect(
      screen.getByRole("heading", { name: /^skills$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^experience$/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^certifications$/i })
    ).toBeInTheDocument();
  });

  test("renders representative subsection headings under Skills", () => {
    render(<SkillsAndExperience />);
    expect(screen.getByText("Languages & Syntax")).toBeInTheDocument();
    expect(screen.getByText("UI & Front-End Frameworks")).toBeInTheDocument();
    expect(screen.getByText("State & Data Management")).toBeInTheDocument();
  });

  test("renders some representative skill items", () => {
    render(<SkillsAndExperience />);
    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(
      screen.getByText("React Query (TanStack Query)")
    ).toBeInTheDocument();
  });

  test("renders experience bullet points", () => {
    render(<SkillsAndExperience />);
    expect(
      screen.getByText(
        /Developed web applications using React, Next\.js, and TypeScript/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Used Vitest and React Testing Library to test component logic/i
      )
    ).toBeInTheDocument();
  });

  test("renders certifications entries", () => {
    render(<SkillsAndExperience />);
    expect(screen.getByText("freeCodeCamp")).toBeInTheDocument();
    expect(screen.getByText("Udemy – Janis Smilga")).toBeInTheDocument();
    expect(screen.getByText("Responsive Web Design")).toBeInTheDocument();
    expect(
      screen.getByText("JavaScript Algorithms and Data Structures")
    ).toBeInTheDocument();
    expect(
      screen.getByText("React, Next.js & TypeScript Projects")
    ).toBeInTheDocument();
  });

  test("has exactly three <section> blocks on the page", () => {
    const { container } = render(<SkillsAndExperience />);
    const sections = container.querySelectorAll("section");
    expect(sections.length).toBe(3);
  });

  test("total number of list items matches data lengths", () => {
    render(<SkillsAndExperience />);
    const totalExpected =
      skillList.length + experienceList.length + certificationsList.length;
    const allLists = screen.getAllByRole("listitem");
    expect(allLists.length).toBe(totalExpected);
  });
});
