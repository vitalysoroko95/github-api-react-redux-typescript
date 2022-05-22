import React from "react";

import "./emptyRepository.scss";

const EmptyRepository = () => {
  return (
    <div className="empty-repository">
      <div className="empty-repository__img"></div>
      <h2> Repository list is empty</h2>
    </div>
  );
};

export default EmptyRepository;
