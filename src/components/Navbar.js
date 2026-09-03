import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({
  profileName,
  isAuthenticated,
  onLogout,
  isDarkMode,
  onToggleTheme,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const displayName = profileName || "Guest";

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

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
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span aria-hidden="true">{isDarkMode ? "☼" : "☾"}</span>
        </button>
        {isAuthenticated ? (
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <Link className="btn btn-danger" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-primary" to="/signup" role="button">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
