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
  return (
    <div className="profile-container">
      <img src={`${props.avatar}`} alt="user_avatar" />
      <p>{props.name}</p>
      <a href={props.htmlUrl} target="_blank">
        {props.login}
      </a>
      <div className="follow-inform">
        <div>
          {props.followers}
          followers
        </div>
        <div>
          {props.following}
          following
        </div>
      </div>
    </div>
  );
};

export default Profile;
