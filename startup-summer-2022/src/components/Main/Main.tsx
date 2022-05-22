import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { getRepositories } from "../../store/repositoriesSlice";
import { getUser } from "../../store/userSlice";
import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import Repositories from "../Repositories/Repositories";

import "./main.scss";

const Main = () => {
  const dispatch = useAppDispatch();
  const { username, userData, error, isLoading } = useAppSelector(
    (store) => store.user
  );
  const { repData, currentPage, perPage } = useAppSelector(
    (store) => store.repositories
  );

  useEffect(() => {
    if (username) {
      dispatch(getUser(username));
      dispatch(getRepositories({ username, perPage, page: currentPage }));
    }
  }, [username]);

  useEffect(() => {
    if (username) {
      dispatch(getRepositories({ username, perPage, page: currentPage }));
    }
  }, [currentPage]);

  return (
    <>
      {username && !error ? (
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
      ) : (
        <>
          {error && username ? (
            <div className="not-found-container">
              <div className="not-found__img"></div>
              <h2>User not found</h2>
            </div>
          ) : (
            <div className="welcome-container">
              <div className="welcome-container__img"></div>
              <h2> Start with searching a GitHub user</h2>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Main;
