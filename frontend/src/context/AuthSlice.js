import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      (state.user = action.payload), 
      (state.isLoggedIn = true);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
      console.log(action.payload);
    },
    logout: (state) => {
      (state.user = null), (state.isLoggedIn = false);
    },
  },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;
