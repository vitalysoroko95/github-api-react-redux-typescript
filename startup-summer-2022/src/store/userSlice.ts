import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { EmptyObject } from "react-hook-form";
import { IUserDataResponce } from "../types";

interface IUserState {
  username: string;
  error: string;
  isLoading: boolean;
  userData: IUserDataResponce;
}

const initialState = {
  username: "",
  error: "",
  isLoading: false,
  userData: {} as IUserDataResponce,
};

export const getUser: AsyncThunk<IUserDataResponce, string, EmptyObject> =
  createAsyncThunk(
    "board/createBoard",
    async (username: string): Promise<IUserDataResponce> => {
      const response: AxiosResponse<IUserDataResponce> = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return response.data;
    }
  );

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
  extraReducers: {
    [getUser.fulfilled.type]: (
      state: IUserState,
      action: PayloadAction<IUserDataResponce>
    ) => {
      state.isLoading = false;
      state.userData = action.payload;
      state.error = "";
    },
    [getUser.pending.type]: (state: IUserState) => {
      state.isLoading = true;
    },
    [getUser.rejected.type]: (state: IUserState, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
