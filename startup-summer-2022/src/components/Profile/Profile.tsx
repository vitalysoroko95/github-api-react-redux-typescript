import React from "react";

import "./profile.scss";

interface IProfileProps {
  avatar: string;
  htmlUrl: string;
  name: string;
  following: number;
  followers: number;
  login: string;
}

const Profile = (props: IProfileProps) => {
  const rounding = (num: number) => {
    if (num > 1000) {
      const res = Math.ceil((num / 1000) * 10) / 10;
      return `${res}k`;
    } else {
      return num;
    }
  };

  return (
    <div className="profile-container">
      <img
        className="progile-avatar"
        src={`${props.avatar}`}
        alt="user_avatar"
      />
      <p className="name title">{props.name}</p>
      <a className="url-link" href={props.htmlUrl} target="_blank">
        {props.login}
      </a>
      <div className="follow-inform">
        <div className="followers">
          <div className="followers-icon"></div>
          {rounding(props.followers)} followers
        </div>
        <div className="following">
          <div className="following-icon"></div>
          {rounding(props.following)} following
        </div>
      </div>
    </div>
  );
};

export default Profile;
