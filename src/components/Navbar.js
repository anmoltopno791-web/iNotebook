import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ profileName }) => {
  const location = useLocation();
  const displayName = profileName || "Guest";
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
        <div
          className="profile-chip"
          aria-label={`Current workspace member: ${displayName}`}
        >
          <span className="avatar">{displayName.charAt(0).toUpperCase()}</span>
          <span className="profile-name">{displayName}</span>
        </div>
        <Link class="btn btn-danger" to="/login" role="button">
          Login
        </Link>
        <Link class="btn btn-primary" to="/signup" role="button">
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
