import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  favoritesCount: 0,
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const update = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (!update) {
        state.favorites.push(action.payload);
        state.favoritesCount++;
      }
      return state;
    },
  },
});

export const { addToFavorites } = favSlice.actions;
export default favSlice.reducer;
