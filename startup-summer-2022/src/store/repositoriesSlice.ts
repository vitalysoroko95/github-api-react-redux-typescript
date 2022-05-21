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
  currentPage: number;
  perPage: number;
  repData: IRepsDataResponce[];
}

interface IReqestData {
  username: string;
  perPage: number;
  page: number;
}

const initialState = {
  error: "",
  isLoading: false,
  repData: [],
  currentPage: 1,
  perPage: 4,
};

export const getRepositories: AsyncThunk<
  IRepsDataResponce,
  IReqestData,
  EmptyObject
> = createAsyncThunk(
  "getRepositories",
  async (args: {
    username: string;
    perPage: number;
    page: number;
  }): Promise<IRepsDataResponce> => {
    const response: AxiosResponse<IRepsDataResponce> = await axios.get(
      `https://api.github.com/users/${args.username}/repos?page=${args.page}&per_page=${args.perPage}`
    );
    return response.data;
  }
);

export const repositoriesSlice = createSlice({
  name: "repositoriesSlice",
  initialState,

  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getRepositories.fulfilled.type]: (
      state: IRepositoriesState,
      action: PayloadAction<IRepsDataResponce[]>
    ) => {
      state.isLoading = false;
      state.repData = action.payload;
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
