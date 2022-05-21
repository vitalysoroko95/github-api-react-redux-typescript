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

export const getRepositories: AsyncThunk<any, string, EmptyObject> =
  createAsyncThunk(
    "board/createBoard",
    async (username: string): Promise<any> => {
      const response: AxiosResponse<any> = await axios.get(
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
      action: PayloadAction<any>
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
