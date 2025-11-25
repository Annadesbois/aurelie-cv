// src/pages/CareerBackground.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import CareerBackground from "@/pages/CareerBackground";
import { dropdownHeadings } from "../../data/careerBackgroundData";

describe("CareerBackground", () => {
  test("renders main heading", () => {
    render(<CareerBackground />);
    expect(
      screen.getByRole("heading", { name: /career background/i })
    ).toBeInTheDocument();
  });

  test("renders one collapsible per heading", () => {
    const { container } = render(<CareerBackground />);
    const collapses = container.querySelectorAll(".collapse");
    expect(collapses.length).toBe(dropdownHeadings.length);
  });

  test("renders LinkedIn button with correct href and target", () => {
    render(<CareerBackground />);
    const link = screen.getByRole("link", { name: /view linkedin profile/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/atacquard1"
    );
    expect(link).toHaveAttribute("target", "_blank");
  });
});
