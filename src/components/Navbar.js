import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="topbar">
      <div className="topbar-inner">
        <Link className="brand" to="/" aria-label="iNotebook home">
          <span className="brand-mark">i</span>
          <span>iNotebook</span>
        </Link>
        <div className="nav-links">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
            Workspace
          </Link>
          <Link
            className={location.pathname === "/about" ? "active" : ""}
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="profile-chip" aria-label="Current workspace member">
          <span className="avatar">A</span>
          <span className="profile-name">Anmol</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
