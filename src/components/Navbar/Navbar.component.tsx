import React, { useState } from "react";
import { navbarItems } from "./Navbar.config";
import logo from "../../assets/svg/logoBlue.svg";
import "./Navbar.style.scss";

function HamburgerMenu(props: any) {
  const { setMenuOpen, menuOpen } = props;
  function handleHamburgerClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <button className="hamburger" onClick={handleHamburgerClick}>
      <span className={menuOpen ? "bar active" : "bar"}></span>
      <span className={menuOpen ? "bar active" : "bar"}></span>
      <span className={menuOpen ? "bar active" : "bar"}></span>
    </button>
  );
}

function SignInUp() {
  return (
    <div className="sign-in-up">
      <button className="sign-btn">Sign In</button>
      <button className="sign-btn">Sign Up</button>
    </div>
  );
}

export default function Navbar() {
  const [navLink, setNavLink] = useState(navbarItems[0].item);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(e: any) {
    e.preventDefault();
    setNavLink(e.target.innerHTML);
  }

  return (
    <nav>
      <a href="/" className="logo-link">
        <img src={logo} alt="logo" />
      </a>

      <ul className={menuOpen ? "active" : ""}>
        <li>
          <a href="/" className="signin">
            Sign In
          </a>
        </li>
        {navbarItems.map((ele) => {
          return (
            <li>
              <a
                href="/"
                className={navLink === ele.item ? "active" : ""}
                onClick={(e) => handleNavClick(e)}
              >
                {ele.item}
              </a>
            </li>
          );
        })}
        <li>
          <a href="/" className="signout">
            Sign Out
          </a>
        </li>
      </ul>
      <SignInUp />
      <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
}
