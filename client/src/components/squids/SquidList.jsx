import React from "react";

import { useSquidList } from "./hooks/useSquidList";
import { SquidInfo } from "./SquidInfo";

export function SquidList() {
  const { data = [] } = useSquidList();

  const squids = data.map((squid) => <SquidInfo key={squid.id} {...squid} />);

  return (
    <div>
      <h1>Squids</h1>
      {squids}
    </div>
  );
}
