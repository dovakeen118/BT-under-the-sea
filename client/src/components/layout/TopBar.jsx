import React from "react";

import { Link } from "react-router-dom";

import "../../style/layouts/topBar.pcss";

export function TopBar() {
  return (
    <nav id="top-bar">
      <div className="top-bar-home">
        <svg
          className="top-bar-icon"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="top-bar-title">Under the Sea</span>
      </div>

      <div id="top-bar-navigation">
        <div className="top-bar-links">
          <Link to="/" className="top-bar-link">
            Home
          </Link>
        </div>

        <div>
          <a href="#sign-up" className="top-bar-user">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
