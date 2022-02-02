import React from "react";

import "../../style/squids/squidInfo.pcss";

export const SquidInfo = ({ name, species, victories, specialPower }) => (
  <div className="squid squid__border squid__hover">
    <p className="squid__header">
      Name:
      <span className="squid__text"> {name} </span>
    </p>

    <p className="squid__header">
      Species:
      <span className="squid__text"> {species} </span>
    </p>

    <p className="squid__header">
      Victories:
      <span className="squid__text"> {victories} </span>
    </p>

    <p className="squid__header">
      Special Power:
      <span className="squid__text"> {specialPower || "N/A"} </span>
    </p>
  </div>
);
