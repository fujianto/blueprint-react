import { createApi,  fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type User = {
  name: string,
  login: string,
  id: number,
  avatar_url: string,
  html_url: string,
}

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  tagTypes: ['GET_USER'],
  endpoints: (builder) => ({
    getUserByName: builder.query<User, string>({
      query: (name: string) => `users/${name}`,
      providesTags: (result, error, name) => [{ type: 'GET_USER', name }],
      transformResponse: (
        response: User,
        args,
        meta
      ) => response,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetUserByNameQuery } = userApi
