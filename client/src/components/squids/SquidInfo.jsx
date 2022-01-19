import React from "react";

import "../../style/squids/squidInfo.pcss";

export const SquidInfo = ({ name, species, victories, specialPower }) => (
  <div className="squid squid__border squid__hover">
    <p className="squid__header-bold">
      Name:
      <span className="squid__text-normal"> {name} </span>
    </p>

    <p className="squid__header-bold">
      Species:
      <span className="squid__text-normal"> {species} </span>
    </p>

    <p className="squid__header-bold">
      Victories:
      <span className="squid__text-normal"> {victories} </span>
    </p>

    <p className="squid__header-bold">
      Special Power:
      <span className="squid__text-normal"> {specialPower || "N/A"} </span>
    </p>
  </div>
);
