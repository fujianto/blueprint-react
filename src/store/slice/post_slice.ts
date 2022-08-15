import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
const GET_POSTS = 'GET_POSTS'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostList extends Array<Post> { }

export interface PostState {
  value: PostList
}

const initialState: PostState = {
  value: []
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<PostList>) => {
      state.value = action.payload
    }
  }
})

export const { getPosts } = postSlice.actions
export default postSlice.reducer