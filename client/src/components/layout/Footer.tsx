import React, { FC } from "react";

import "../../style/layouts/Footer.pcss";

export const Footer: FC = () => (
  <div className="footer">
    <div className="footer-home">
      <svg
        className="footer__icon"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
      </svg>
      <span className="footer__title">Under the Sea</span>
    </div>

    <div className="footer__links">
      <a className="footer__link" href="#about">
        About us
      </a>
      <a className="footer__link" href="#community">
        Community
      </a>
      <a className="footer__link" href="#company">
        Company
      </a>
    </div>

    <div className="footer__copyright">
      <p>© Squids, Inc. 2022. We love our squids!</p>
    </div>
  </div>
);
