import React, { FC } from "react";

import { Link } from "react-router-dom";

import "../../style/squids/squidInfo.pcss";
import { SquidShape } from "../../types/SquidShape";

export const SquidInfo: FC<SquidShape> = ({ id, name, specialPower, species, victories }) => {
  return (
    <div className="squid squid__border squid__hover">
      <Link to={`/squids/${id}`}>
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
      </Link>
    </div>
  );
};
