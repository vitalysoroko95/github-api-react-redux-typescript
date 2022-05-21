import React from "react";
import Search from "../Search/Search";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo"></div>
      <Search />
    </div>
  );
};

export default Header;
