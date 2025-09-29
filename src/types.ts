export type SelectorID =
  | "eufarms"
  | "waterProtection"
  | "teaching"
  | "agroecopole"
  | "sse";

export type SubSection = {
  subSectionId: string;
  subId: string;
  subSectionContent: string;
};

export type List = {
  listId: string;
  listContent: string;
};

export type SectionRendererProps = {
  sectionId: string;
  subSections: SubSection[];
  list: List[];
  columns?: number;
  bullets?: boolean;
};

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
