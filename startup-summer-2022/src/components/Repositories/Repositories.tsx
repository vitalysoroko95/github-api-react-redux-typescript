import React, { useEffect } from "react";
import { useAppSelector } from "../../store/hooks/redux";
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
          <h2>Repositories ({repsCount})</h2>

          {repData.length
            ? repData.map((item) => (
                <RepositoriesItem key={repData.indexOf(item)} {...item} />
              ))
            : "Repository list is empty"}
        </div>
      )}
    </>
  );
};

export default Repositories;
