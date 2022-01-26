import React from "react";

import { useSquidList } from "./hooks/useSquidList";
import { SquidInfo } from "./SquidInfo";

import "../../style/squids/squidList.pcss";

export const SquidList = () => {
  const { data = [] } = useSquidList();

  const squids = data.map((squid) => <SquidInfo key={squid.id} {...squid} />);

  return (
    <div className="squidList">
      <h1 className="squidList__heading">Squids</h1>
      <div className="squidList__grid">{squids}</div>
    </div>
  );
};
