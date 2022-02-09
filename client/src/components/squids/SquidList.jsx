import React, { useEffect, useState } from "react";

import { Pagination } from "../common/Pagination";
import { useSquidList } from "./hooks/useSquidList";
import { SquidForm } from "./SquidForm";
import { SquidInfo } from "./SquidInfo";

import "../../style/squids/squidList.pcss";

const itemsPerPage = 10;

export const SquidList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const {
    data,
    isLoading,
    refetch: refetchSquids,
  } = useSquidList({ pageIndex: pageNumber - 1, itemsPerPage });

  useEffect(() => {
    setPageCount(data?.pageCount);
  }, [data]);

  const handlePageClick = (event) => {
    setPageNumber(event.selected + 1);
  };

  let pageHeader = <p className="squidList__heading">(page 1 / 1)</p>;

  if (!isLoading) {
    pageHeader = <p className="squidList__heading">{`(page ${pageNumber} / ${pageCount})`}</p>;
  }

  const squidsData = data?.squids || [];
  const specialPowers = data?.specialPowers || [];

  const squids = squidsData.map((squid) => <SquidInfo key={squid.id} {...squid} />);

  return (
    <div className="squid-list">
      <h1 className="squid-list__heading">
        Squids in the Sea <span className="squid-list__heading-page">{pageHeader}</span>
      </h1>
      <SquidForm specialPowers={specialPowers} />
      <div className="squid-list__grid">{squids}</div>
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      <button className="squid-list__btn" type="button" onClick={refetchSquids}>
        Refresh
      </button>
    </div>
  );
};
