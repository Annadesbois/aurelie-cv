import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/skillsandexperience", text: "Skills And Experience" },
  { id: 3, url: "/careerbackground", text: "Career Background" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id} className="text-primary font-semibold text-base ">
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
