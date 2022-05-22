import React from "react";

import { IRepsDataResponce } from "../../types";

import "./repositoriesItem.scss";

const RepositoriesItem = (props: IRepsDataResponce) => {
  return (
    <div className="repositories-item-container">
      <a href={props.html_url} target="_blank">
        <p className="rep-item-tittle">{props.name}</p>
      </a>
      <p className="rep-item-description">
        {props.description !== null
          ? props.description
          : "Описание отсутствует"}
      </p>
    </div>
  );
};

export default RepositoriesItem;
