import React from "react";

import { useSquidList } from "./hooks/useSquidList";
import { SquidForm } from "./SquidForm";
import { SquidInfo } from "./SquidInfo";

import "../../style/squids/squidList.pcss";

export const SquidList = () => {
  const { data } = useSquidList();

  const squidsData = data?.squids || [];
  const specialPowerOptions = data?.specialPowerOptions || [];

  const squids = squidsData.map((squid) => <SquidInfo key={squid.id} {...squid} />);

  return (
    <div className="squidList">
      <h1 className="squidList__heading">Squids</h1>
      <SquidForm specialPowerOptions={specialPowerOptions} />
      <div className="squidList__grid">{squids}</div>
    </div>
  );
};
