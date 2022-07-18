import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetTodosProps {
  id: string;
  title: string;
}

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<GetTodosProps[], void>({
      query: () => "/todos",
    }),
    getTodosId: builder.query({
      query: (todoId) => `/todos/${todoId}`,
    }),
  }),
});

export const { useGetTodosQuery,useGetTodosIdQuery } = todosApi;
