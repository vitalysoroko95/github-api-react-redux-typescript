import React, { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import "./search.scss";

const Search = () => {
  const { register, handleSubmit } = useForm<String>();

  const onSubmit: SubmitHandler<String> = (data) => {
    console.log(data);
  };

  return (
    <div className="search-bar">
      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter GitHub username"
          type="text"
          {...register("search", { required: true })}
        />
      </form>
    </div>
  );
};

export default Search;
