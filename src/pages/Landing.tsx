import aurelie from "@/assets/aurelie.jpg";
import { programmingSkillsPreview, softSkills } from "@/data/landingData";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="hero bg-base-100 px-[2rem] md:px-[8rem] lg:px-[10rem] py-8">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={aurelie}
            alt="Profile picture"
            className="h-62 w-50 rounded-full object-cover lg:hidden"
          />
          <div className="text-justify">
            <h1 className="font-bold text-primary pb-10 text-2xl md:text-3xl md:text-center text-center lg:text-4xl">
              Aurelie Burrows,
              <h2>Front-End Developer</h2>
            </h1>
            <div className="flex lg:flex-row lg:items-start">
              <img
                src={aurelie}
                alt="Profile picture"
                className="h-62 w-50 rounded-full object-cover hidden lg:flex lg:flex-col"
              />
              <div className="lg:pl-8">
                <p className="pb-4">Hello,</p>
                <p className="pb-6">
                  I'm a front-end developer focused on building clean,
                  responsive web applications using React, TypeScript, and
                  modern tools.
                </p>
                <p className="pb-6">
                  I've built a variety of real-world projects, including
                  dashboards, dynamic forms, and interactive user interfaces —
                  all with a strong emphasis on performance, reusability, and
                  maintainable code.
                </p>
                <p className="pb-6">
                  I enjoy crafting user-focused experiences and bring solid
                  problem-solving skills, agile workflow experience, and a
                  collaborative mindset to every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 py-8 w-full">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-center text-4xl font-bold text-primary mb-6">
              Programming Skills
            </h1>
            <ul className="pb-6">
              {programmingSkillsPreview.map((skill) => {
                return <li className="pb-4">{skill}</li>;
              })}
            </ul>
            <Link to="/skillsandexperience" className="btn btn-primary">
              Go to Skills & Experience
            </Link>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-center text-4xl font-bold text-primary mb-6">
              Soft Skills
            </h1>
            <ul className="pb-6">
              {softSkills.map((skill) => {
                return <li className="pb-4">{skill}</li>;
              })}
            </ul>
            <Link to="/careerbackground" className="btn btn-primary">
              Go to Career Background
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
