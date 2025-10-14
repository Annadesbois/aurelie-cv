import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import SectionRenderer from "./SectionRenderer";

type SubSection = {
  subSectionId: string;
  subId: string;
  subSectionContent: string;
};
type List = { listId: string; listContent: string };

const subSections: SubSection[] = [
  { subSectionId: "skill", subId: "lang", subSectionContent: "Languages" },
  {
    subSectionId: "skill",
    subId: "frameworks",
    subSectionContent: "Frameworks",
  },
  { subSectionId: "other", subId: "ignored", subSectionContent: "Ignored" },
];

const list: List[] = [
  { listId: "lang", listContent: "TypeScript" },
  { listId: "lang", listContent: "JavaScript" },
  { listId: "frameworks", listContent: "React" },
  { listId: "ignored", listContent: "Should Not Render" },
];

describe("SectionRenderer", () => {
  test("filters by sectionId and renders items under matching subsections", () => {
    render(
      <SectionRenderer
        sectionId="skill"
        subSections={subSections}
        list={list}
        columns={3}
        bullets
      />
    );

    // matching subsection headings
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("Frameworks")).toBeInTheDocument();

    // non-matching subsection should not be rendered
    expect(screen.queryByText("Ignored")).not.toBeInTheDocument();

    // items for the rendered subsections
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();

    // item tied to non-rendered subsection should not appear
    expect(screen.queryByText("Should Not Render")).not.toBeInTheDocument();

    // total li count should match the three items above
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  test("applies 3-column grid classes when columns=3", () => {
    const { container } = render(
      <SectionRenderer
        sectionId="skill"
        subSections={subSections}
        list={list}
        columns={3}
        bullets
      />
    );

    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass(
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-3",
      "gap-8",
      "py-8"
    );
    expect(root.className).toMatch(/align-element/);
    expect(root.className).toMatch(/max-w-7xl/);
  });

  test("applies 2-column grid classes when columns=2", () => {
    const { container } = render(
      <SectionRenderer
        sectionId="skill"
        subSections={subSections}
        list={list}
        columns={2}
        bullets
      />
    );

    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass(
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "gap-8",
      "py-8"
    );
    expect(root.className).toMatch(/max-w-7xl/);
  });

  test("falls back to flex layout when columns is neither 2 nor 3", () => {
    const { container } = render(
      <SectionRenderer
        sectionId="skill"
        subSections={subSections}
        list={list}
        columns={1}
        bullets
      />
    );

    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("flex", "flex-col", "gap-8");
    expect(root.className).toMatch(/max-w-7xl/);
  });
});
