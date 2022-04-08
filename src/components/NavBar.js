import { useRef, useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { NavLink } from "react-router-dom";
import NetflixLogo from "../static/images/logo.png";
import SearchLogo from "../static/images/search-icon.svg";
import BellLogo from "../static/images/bell-logo.svg";
import Profile from "./Profile";
const Navbar = (props) => {
  const searchRef = useRef();
  const [userInput, setUserInput] = useState("");
  const { scrollY } = useScroll();
  const logoClickHandle = (e) => {
    setUserInput("");
  };
  const searchValueChangeHandle = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <nav className={"nav " + (scrollY > 50 ? "black" : "")}>
      <ul className="nav__container">
        <NavLink to="/" onClick={logoClickHandle}>
          <img className="nav__container--logo" src={NetflixLogo} alt="logo" />
        </NavLink>
        <li className="nav__container-link pseudo-link">Home</li>
        <li className="nav__container-link pseudo-link">TV Shows</li>
        <li className="nav__container-link pseudo-link">Movies</li>
        <li className="nav__container-link pseudo-link">Recent Added</li>
        <li className="nav__container-link pseudo-link">My List</li>
      </ul>
      <div className="nav__container--left">
        <span className="logo">
          <SearchLogo />
        </span>
        <input
          type="text"
          ref={searchRef}
          className="nav__container--left__input"
          value={userInput}
          onChange={searchValueChangeHandle}
          placeholder="Title, genres, people"
        />
      </div>
      <li className="nav__container-link pseudo-link">KIDS</li>
      <li className="nav__container-link pseudo-link">DVD</li>
      <span className="navigation__container--bellLogo">
        <BellLogo />
      </span>
      <Profile />
    </nav>
  );
};

export default Navbar;
