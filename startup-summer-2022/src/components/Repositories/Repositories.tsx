import React, { useEffect } from "react";
import { useAppSelector } from "../../store/hooks/redux";
import PaginationBar from "../Paginator/Paginator";
import RepositoriesItem from "../RepositoriesItem/RepositoriesItem";

import "./repositories.scss";

const Repositories = () => {
  const { repData, isLoading } = useAppSelector((store) => store.repositories);
  const { userData } = useAppSelector((store) => store.user);
  const repsCount = userData.public_repos;

  return (
    <>
      {isLoading ? (
        <h2>loading </h2>
      ) : (
        <div className="repositories-container">
          {repsCount && (
            <h2 className="rep-container-title title">
              Repositories ({repsCount})
            </h2>
          )}

          {repData.length
            ? repData.map((item) => (
                <RepositoriesItem key={repData.indexOf(item)} {...item} />
              ))
            : "Repository list is empty"}
          {repsCount && <PaginationBar totalItems={repsCount} />}
        </div>
      )}
    </>
  );
};

export default Repositories;
