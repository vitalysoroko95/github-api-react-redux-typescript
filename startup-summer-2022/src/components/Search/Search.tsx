import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks/redux";
import { userSlice } from "../../store/userSlice";

import "./search.scss";

interface IFormInput {
  search: string;
}

const Search = () => {
  const dispatch = useAppDispatch();

  const { setUsername } = userSlice.actions;
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const username = data.search;
    dispatch(setUsername(username));
  };

  return (
    <div className="search-bar">
      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="text-field__input"
          placeholder="Enter GitHub username"
          type="text"
          {...register("search", { required: true })}
        />
      </form>
    </div>
  );
};

export default Search;
