import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon/slices";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
