import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const toggleTheme = () => {
  const themes = {
    winter: "winter",
    forest: "forest",
  };

  const currentTheme = localStorage.getItem("theme") || themes.winter;
  const newTheme =
    currentTheme === themes.forest ? themes.winter : themes.forest;
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

const Navbar = () => {
  return (
    <nav className="bg-base-200 px-[1.5rem] md:px-[8rem] sticky top-0 z-50">
      <div className="navbar align-element">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6 text-primary" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <button>
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <BsSunFill className="swap-on w-4 h-4 text-primary" />
              <BsMoonFill className="swap-off w-4 h-4 text-primary" />
            </label>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
