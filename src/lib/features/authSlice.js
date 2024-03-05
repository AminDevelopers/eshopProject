import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      username: "souki",
      password: "soukaina1234",
    },
    {
      username: "amin",
      password: "password",
    },
  ],
  userLogged: "guest",
  isLogged: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      let user = state.users.find(
        (element) => element.username === action.payload.username
      );
      if (user != undefined && user?.password === action.payload.password) {
        state.isLogged = true;
        state.userLogged = user.username;
        alert("Welcome !");
      } else {
        alert("incorrect");
      }
    },
  },
});

export const { logIn } = authSlice.actions;
export default authSlice.reducer;
