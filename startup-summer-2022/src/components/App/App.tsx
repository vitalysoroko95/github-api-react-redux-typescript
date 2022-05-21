import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/*  <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
