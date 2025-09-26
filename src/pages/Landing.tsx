import aurelie from "@/assets/aurelie.jpg";

const Landing = () => {
  return (
    <div>
      <div className="hero bg-base-100 px-[2rem] md:px-[8rem] lg:px-[10rem] py-8">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={aurelie}
            alt="Profile picture"
            className="h-62 w-50 rounded-full object-cover"
          />
          <div className="text-justify">
            <h1 className="font-bold text-primary pb-10 text-2xl md:text-3xl md:text-center text-center lg:text-4xl">
              Aurelie Burrows,
              <h2>Front-End Developer</h2>
            </h1>
            <div className="lg:pl-8">
              <p className="pb-4">Hello,</p>
              <p className="pb-6">
                I'm a front-end developer focused on building clean, responsive
                web applications using React, TypeScript, and modern tools.
              </p>
              <p className="pb-6">
                I've built a variety of real-world projects, including
                dashboards, dynamic forms, and interactive user interfaces — all
                with a strong emphasis on performance, reusability, and
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
  );
};
export default Landing;
