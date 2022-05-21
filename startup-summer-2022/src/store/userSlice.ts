import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { EmptyObject } from 'react-hook-form';

interface IUserState {
    username: string,
    error:string,
    isLoading: boolean,
    userData: IUserDataResponce
}


interface IUserDataResponce {
  login: string,
  id: number,
  node_id:  string,
  avatar_url:  string,
  gravatar_id:  string,
  url:  string,
  html_url:  string,
  followers_url:  string,
  following_url:  string,
  gists_url:  string,
  starred_url:  string,
  subscriptions_url:  string,
  organizations_url:  string,
  repos_url:  string,
  events_url:  string,
  received_events_url:  string,
  type:  string,
  site_admin: boolean,
  name:  string,
  company:  string,
  blog:  string,
  location:  string,
  email:  string,
  hireable: boolean,
  bio:  string,
  twitter_username:  string,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string,
  private_gists: number,
  total_private_repos: number,
  owned_private_repos: number,
  disk_usage: number,
  collaborators: number,
  two_factor_authentication: boolean,
  plan: {
    name: string,
    space: number,
    private_repos: number,
    collaborators: number
  }
}


const initialState = {
  username: '',
  error:'',
  isLoading: false,
  userData: <IUserDataResponce>{}
};

export const getUser: AsyncThunk<IUserDataResponce, string, EmptyObject> = createAsyncThunk(
    'board/createBoard',
    async (username: string): Promise<IUserDataResponce> => {
      const response: AxiosResponse<IUserDataResponce> = await axios.get(
        `https://api.github.com/users/${username}`);
      return response.data;
      
    }
);

 
export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
        state.username = action.payload;
        console.log('works', state.username)
      },
  },
  extraReducers: {
    [getUser.fulfilled.type]: (state: IUserState, action: PayloadAction<IUserDataResponce>) => {
      state.isLoading = false;
      state.userData = action.payload;
      console.log(state.userData)
      state.error = '';
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

export const {setUsername } = userSlice.actions;
export default userSlice.reducer;

