import React from "react";

import { IRepsDataResponce } from "../../types";

import "./repositoriesItem.scss";

const RepositoriesItem = (props: IRepsDataResponce) => {
  return (
    <div className="repositories-container">
      <h3>{props.name}</h3>
      <p>
        {props.description !== null
          ? props.description
          : "Описание отсутствует"}
      </p>
    </div>
  );
};

export default RepositoriesItem;
