import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { getUser } from "../../store/userSlice";
import Ptofile from "../Profile/Profile";
import Repositories from "../Repositories/Repositories";

import "./main.scss";

const Main = () => {
  const dispatch = useAppDispatch();
  const {username, userData} = useAppSelector((store)=>store.user)


  useEffect(()=>{
    if(username){
      dispatch(getUser(username));
    }
  },[username])

  return (
    <div className="main">
       <h1>Main</h1>
       <Ptofile />
       <Repositories />
    </div>
  );
};

export default Main;
