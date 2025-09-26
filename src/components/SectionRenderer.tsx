import type { SectionRendererProps } from "@/types";

const SectionRenderer = ({
  sectionId,
  subSections,
  list,
  columns,
  bullets,
}: SectionRendererProps) => {
  const columnClass =
    columns === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-8 py-8 max-w-7xl mx-auto"
      : columns === 3
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 align-element py-8 max-w-7xl mx-auto"
      : "flex flex-col gap-8 max-w-7xl mx-auto";
  return (
    <div className={columnClass}>
      {subSections
        .filter(({ subSectionId }) => sectionId === subSectionId)
        .map(({ subId, subSectionContent }) => (
          <div key={subId} className="pb-8">
            <p className="text-lg font-medium text-secondary mb-2">
              {subSectionContent}
            </p>
            <ul className={bullets ? "list-disc ml-6 pt-2" : ""}>
              {list
                .filter(({ listId }) => subId === listId)
                .map(({ listContent }) => (
                  <li
                    key={`${subId}-${listContent}`}
                    className={bullets ? "pb-4" : "ml-4 pb-2"}
                  >
                    {listContent}
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default SectionRenderer;
