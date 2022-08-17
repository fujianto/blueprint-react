import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Posts } from '../../types/index'


export interface PostState {
  value: Posts
}

const initialState: PostState = {
  value: []
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Posts>) => {
      state.value = action.payload
    }
  }
})

export const { setPosts } = postSlice.actions
export default postSlice.reducer