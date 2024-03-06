import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      username: "username",
      password: "password",
    },
    {
      username: "amin",
      password: "password",
    },
  ],
  form: {
    username: "",
    password: "",
  },
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
    inscription: (state, action) => {
      const userExist = state.users.some(
        (user) => user.username === action.payload.username
      );

      const { username, password } = action.payload;

      if (!username || !password) {
        alert("please enter both username and password.");
        return;
      }

      if (!userExist) {
        state.users.push(action.payload);
        alert(`User added successfully !`);
      } else {
        alert(`This username is already taken. Try again !`);
      }
    },
    setUsername: (state, action) => {
      state.form.username = action.payload;
    },
    setPassword: (state, action) => {
      state.form.password = action.payload;
    },

    disconnect: (state) => {
      state.isLogged = false;
      state.userLogged = "Guest";
    },
  },
});

export const { logIn, inscription, setUsername, setPassword, disconnect } =
  authSlice.actions;
export default authSlice.reducer;
