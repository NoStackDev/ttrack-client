import React, { useState } from "react";
import { navbarItems } from "./Navbar.config";
import logo from "../../assets/svg/logoBlue.svg";
import "./Navbar.style.scss";

interface HamburgerMenuInterface {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

function HamburgerMenu({ menuOpen, setMenuOpen }: HamburgerMenuInterface) {
  return (
    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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
        {navbarItems.map((ele, index) => {
          return (
            <li key={index}>
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
