import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { repositoriesSlice } from "../../store/repositoriesSlice";

import "./paginator.scss";

interface IPaginatorProps {
  totalItems: number;
}

const PaginationBar = (props: IPaginatorProps) => {
  const { currentPage, perPage } = useAppSelector(
    (state) => state.repositories
  );
  const pagesCount = Math.ceil(props.totalItems / perPage);
  const pages = [];

  const offset = (currentPage - 1) * perPage + 1;

  const dispatch = useAppDispatch();
  const { setCurrentPage } = repositoriesSlice.actions;

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = 3;
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionCount + 1;
  const rightPortionPageNumber = portionNumber * portionCount;

  return (
    <div className="pagination-bar">
      <div>
        {currentPage == 1 ? currentPage : currentPage * perPage - 3} -{" "}
        {currentPage !== pagesCount ? currentPage * perPage : offset} of{" "}
        {props.totalItems} items
      </div>
      {portionNumber > 1 && (
        <button
          className="pagination-button"
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={currentPage === p ? "selectedPage" : "pageNumber"}
              key={p}
              onClick={() => {
                dispatch(setCurrentPage(p));
              }}
            >
              {p}
            </span>
          );
        })}

      {portionCount > portionNumber && (
        <button
          className="pagination-button"
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default PaginationBar;
