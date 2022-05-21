import { configureStore } from "@reduxjs/toolkit";
import repositoriesSlice from "./repositoriesSlice";

import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    repositories: repositoriesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
