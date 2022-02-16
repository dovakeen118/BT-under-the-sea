import React, { FC, useEffect, useState } from "react";

import { Pagination } from "../common/Pagination";
import { useSquidList } from "./hooks/useSquidList";
import { SquidForm } from "./SquidForm";
import { SquidInfo } from "./SquidInfo";

import "../../style/squids/squidList.pcss";

const itemsPerPage = 10;

export const SquidList: FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const { data: fetchedSquids, refetch: refetchSquids } = useSquidList({
    pageIndex: pageNumber - 1,
    itemsPerPage,
  });

  useEffect(() => {
    setPageCount(fetchedSquids?.pageCount);
  }, [fetchedSquids]);

  const handlePageClick = ({ selected }: { selected: number }): void => {
    setPageNumber(selected + 1);
  };

  const pageHeader = (
    <p className="squid-list__heading">{`(page ${pageNumber} / ${pageCount || 1})`}</p>
  );

  const squidsData = fetchedSquids?.squids || [];

  const squids = squidsData.map((squid) => <SquidInfo key={squid.id} {...squid} />);

  const onRefreshClick = (): void => {
    refetchSquids();
  };

  return (
    <div className="squid-list">
      <h1 className="squid-list__heading">
        Squids in the Sea <span className="squid-list__heading-page">{pageHeader}</span>
      </h1>
      <SquidForm />
      <div className="squid-list__grid">{squids}</div>
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      <button className="squid-list__btn" type="button" onClick={onRefreshClick}>
        Refresh
      </button>
    </div>
  );
};
