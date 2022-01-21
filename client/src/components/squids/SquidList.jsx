import React, { useEffect, useState } from "react";

import { Pagination } from "../common/Pagination";
import { useSquidList } from "./hooks/useSquidList";
import { SquidInfo } from "./SquidInfo";

import "../../style/squids/squidList.pcss";

const itemsPerPage = 10;

export const SquidList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const { data = {}, isLoading } = useSquidList({ pageIndex: pageNumber - 1, itemsPerPage });

  const squidData = data.squids || [];

  useEffect(() => {
    setPageCount(data.pageCount);
  }, [data]);

  const squids = squidData.map((squid) => <SquidInfo key={squid.id} {...squid} />);

  const handlePageClick = (event) => {
    setPageNumber(event.selected + 1);
  };

  let pageHeader;

  if (!isLoading) {
    pageHeader = <p className="squidList__heading">{`(page ${pageNumber} / ${pageCount})`}</p>;
  }

  return (
    <div className="squidList">
      <h1 className="squidList__heading">Squids</h1>
      {pageHeader}
      <div className="squidList__grid">{squids}</div>
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};
