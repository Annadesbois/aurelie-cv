import {
  dropdownHeadings,
  dateAndLocations,
  responsibilities,
} from "@/data/careerBackgroundData";

const CareerBackground = () => {
  return (
    <div className="px-[2rem] md:px-[4rem] lg:px-[10rem] py-8 max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-bold text-primary mb-12">
        Career Background
      </h1>
      <div>
        {dropdownHeadings.map(({ headingId, content }, index) => {
          return (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-100 border-base-300 border mb-6"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-semibold text-secondary">
                {content}
              </div>
              <div className="collapse-content px-14 text-justify">
                {dateAndLocations
                  .filter(({ locationId }) => headingId === locationId)
                  .map(({ content }, index) => {
                    return (
                      <p key={index} className="pb-6 italic text-neutral-400">
                        {content}
                      </p>
                    );
                  })}
                {responsibilities
                  .filter(
                    ({ responsibilitiesId }) => headingId === responsibilitiesId
                  )
                  .map(({ content }, index) => {
                    return (
                      <li key={index} className="pb-2">
                        {content}
                      </li>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/atacquard1"
          target="_blank"
        >
          <button className="btn btn-primary mt-8 ">
            View LinkedIn profile
          </button>
        </a>
      </div>
    </div>
  );
};
export default CareerBackground;
