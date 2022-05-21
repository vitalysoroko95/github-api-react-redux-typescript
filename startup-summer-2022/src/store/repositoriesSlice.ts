import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { EmptyObject } from "react-hook-form";
import { IRepsDataResponce } from "../types";

interface IRepositoriesState {
  error: string;
  isLoading: boolean;
  repData: IRepsDataResponce[];
}

const initialState = {
  error: "",
  isLoading: false,
  repData: [],
};

export const getRepositories: AsyncThunk<
  IRepsDataResponce,
  string,
  EmptyObject
> = createAsyncThunk(
  "getRepositories",
  async (username: string): Promise<IRepsDataResponce> => {
    const response: AxiosResponse<IRepsDataResponce> = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  }
);

export const repositoriesSlice = createSlice({
  name: "repositoriesSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getRepositories.fulfilled.type]: (
      state: IRepositoriesState,
      action: PayloadAction<IRepsDataResponce[]>
    ) => {
      state.isLoading = false;
      state.repData = action.payload;
      console.log(state.repData);
      state.error = "";
    },
    [getRepositories.pending.type]: (state: IRepositoriesState) => {
      state.isLoading = true;
    },
    [getRepositories.rejected.type]: (state: IRepositoriesState, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const {} = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
