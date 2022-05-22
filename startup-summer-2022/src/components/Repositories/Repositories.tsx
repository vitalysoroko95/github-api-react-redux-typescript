import React, { useEffect } from "react";
import { useAppSelector } from "../../store/hooks/redux";
import EmptyRepository from "../EmptyRepository/EmptyRepository";
import PaginationBar from "../Paginator/Paginator";
import Preloader from "../Preloader/Preloader";
import RepositoriesItem from "../RepositoriesItem/RepositoriesItem";

import "./repositories.scss";

const Repositories = () => {
  const { repData, isLoading } = useAppSelector((store) => store.repositories);
  const { userData } = useAppSelector((store) => store.user);
  const repsCount = userData.public_repos;

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="repositories-container">
          {repsCount && (
            <h2 className="rep-container-title title">
              Repositories ({repsCount})
            </h2>
          )}

          {repData.length &&
            repData.map((item) => (
              <RepositoriesItem key={repData.indexOf(item)} {...item} />
            ))}
          {repsCount && <PaginationBar totalItems={repsCount} />}
        </div>
      )}
    </>
  );
};

export default Repositories;
