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
