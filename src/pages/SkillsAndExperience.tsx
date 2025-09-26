import SectionRenderer from "../components/SectionRenderer";
import {
  certificationsList,
  certificationsSubSections,
  experienceList,
  experienceSubSections,
  skillList,
  skillSubSections,
} from "../data";

const SkillsAndExperience = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-primary my-12">
        Skills & Experience
      </h1>
      <section className="bg-base-100  px-[2rem] md:px-[8rem] lg:px-[10rem]">
        <h1 className="text-3xl font-bold text-primary max-w-7xl mx-auto">
          Skills
        </h1>
        <SectionRenderer
          sectionId="skill"
          subSections={skillSubSections}
          list={skillList}
          columns={3}
        />
      </section>
      <section className="bg-base-200 px-[2rem] md:px-[8rem] lg:px-[10rem] py-10">
        <h1 className="text-3xl font-bold text-primary mb-8 align-element max-w-7xl mx-auto">
          Experience
        </h1>
        <SectionRenderer
          sectionId="exp"
          subSections={experienceSubSections}
          list={experienceList}
          bullets={true}
        />
      </section>
      <section className="bg-base-100 px-[2rem] md:px-[8rem] lg:px-[10rem] py-10">
        <h1 className="text-3xl font-bold text-primary mb-8 max-w-7xl mx-auto">
          Certifications
        </h1>
        <SectionRenderer
          sectionId="certif"
          subSections={certificationsSubSections}
          list={certificationsList}
        />
      </section>
    </div>
  );
};
export default SkillsAndExperience;
