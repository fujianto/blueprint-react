import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './slice/post_slice'

export const store = configureStore({
  reducer: {
    posts: PostReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch