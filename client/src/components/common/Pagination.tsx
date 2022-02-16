import React, { FC } from "react";

import ReactPaginate from "react-paginate";

import "../../style/common/pagination.pcss";

export const Pagination: FC<{ pageCount: number; handlePageClick: any }> = ({
  pageCount = 1,
  handlePageClick,
}) => (
  <ReactPaginate
    breakLabel="..."
    nextLabel="next"
    onPageChange={handlePageClick}
    pageRangeDisplayed={3}
    pageCount={pageCount}
    previousLabel="previous"
    renderOnZeroPageCount={null}
    containerClassName="pagination"
    pageClassName="pagination__link"
    breakClassName="pagination__link"
    nextClassName="pagination__btn"
    previousClassName="pagination__btn"
    activeLinkClassName="pagination__link-active"
  />
);
