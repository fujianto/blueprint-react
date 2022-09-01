import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Posts } from '../../types/index';

export interface PostState {
  status: string;
  value: Posts;
}

const initialState: PostState = {
  status: 'loading',
  value: []
};

interface PostProps {
  data: Posts;
  status: string;
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostProps>) => {
      state.value = action.payload.data;
      state.status = action.payload.status;
    }
  }
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
