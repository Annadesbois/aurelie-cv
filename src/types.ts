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
  headingId: string;
  content: string;
};

export type Locations = {
  locationId: string;
  content: string;
};

export type Responsibilities = {
  responsibilitiesId: string;
  content: string;
};
