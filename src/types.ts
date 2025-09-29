//Type for SectionRenderer component
export type SectionRendererProps = {
  sectionId: "skill" | "exp" | "certif";
  subSections: SubSection[];
  list: List[];
  columns?: number;
  bullets?: boolean;
};

// Types for skills and experience data
export type SubSection = {
  subSectionId: string;
  subId: string;
  subSectionContent: string;
};

export type List = {
  listId: string;
  listContent: string;
};

// Types for career background data
export type SelectorID =
  | "eufarms"
  | "waterProtection"
  | "teaching"
  | "agroecopole"
  | "sse";

export type Headings = {
  headingId: SelectorID;
  content: string;
};

export type Locations = {
  locationId: SelectorID;
  content: string;
};

export type Responsibilities = {
  responsibilitiesId: SelectorID;
  content: string;
};
