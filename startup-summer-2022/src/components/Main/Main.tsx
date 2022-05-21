import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { getRepositories } from "../../store/repositoriesSlice";
import { getUser } from "../../store/userSlice";
import Ptofile from "../Profile/Profile";
import Repositories from "../Repositories/Repositories";

import "./main.scss";

const Main = () => {
  const dispatch = useAppDispatch();
  const { username, userData } = useAppSelector((store) => store.user);
  const { repData } = useAppSelector((store) => store.repositories);

  useEffect(() => {
    if (username) {
      dispatch(getUser(username));
      dispatch(getRepositories(username));
    }
  }, [username]);

  useEffect(() => {
    if (repData && userData) {
      console.log("reps =>", repData, "userData=>", userData);
    }
  }, [repData, userData]);

  return (
    <div className="main">
      <h1>Main</h1>
      <Ptofile />
      <Repositories />
    </div>
  );
};

export default Main;
