import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { getRepositories } from "../../store/repositoriesSlice";
import { getUser } from "../../store/userSlice";
import Profile from "../Profile/Profile";
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

  return (
    <div className="main">
      <Profile
        avatar={userData.avatar_url}
        htmlUrl={userData.html_url}
        name={userData.name}
        following={userData.following}
        followers={userData.followers}
        login={userData.login}
      />
      <Repositories />
    </div>
  );
};

export default Main;
