import React, { FC } from "react";

import { Link } from "react-router-dom";

import "../../style/layouts/topBar.pcss";
import "../../style/common/navButton.pcss";

export const TopBar: FC = () => (
  <nav className="top-bar">
    <div className="top-bar-home">
      <svg
        className="top-bar__icon"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
      </svg>
      <span className="top-bar__title">Under the Sea</span>
    </div>

    <div className="navigation">
      <div className="navigation__links">
        <Link to="/" className="navigation__link">
          Home
        </Link>
        <Link to="/squids" className="navigation__link">
          Squids
        </Link>
      </div>

      <div className="navigation__btns">
        <a href="#log-in" className="navigation__btn navigation__btn-teal">
          Log in
        </a>
        <a href="#sign-up" className="navigation__btn navigation__btn-white">
          Sign up
        </a>
      </div>
    </div>
  </nav>
);
