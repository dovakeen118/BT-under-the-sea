import React from "react";

import { useSquidList } from "./hooks/useSquidList";
import { SquidForm } from "./SquidForm";
import { SquidInfo } from "./SquidInfo";

import "../../style/squids/squidList.pcss";

export const SquidList = () => {
  const { data, refetch: refetchSquids } = useSquidList();

  const squidsData = data?.squids || [];
  const specialPowers = data?.specialPowers || [];

  const squids = squidsData.map((squid) => <SquidInfo key={squid.id} {...squid} />);

  return (
    <div className="squid-list">
      <h1 className="squid-list__heading">Squids in the Sea</h1>
      <button className="squid-list__btn" type="button" onClick={refetchSquids}>
        Refresh
      </button>
      <SquidForm specialPowers={specialPowers} />
      <div className="squid-list__grid">{squids}</div>
    </div>
  );
};
