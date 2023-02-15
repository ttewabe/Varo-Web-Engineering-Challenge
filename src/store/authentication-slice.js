import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionId: null,
  account: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.sessionId = action.payload;
    },
    setAccount: (state, action) => {
      state.account = action.payload;
    },
  },
});


export const { setSession, setAccount } = authSlice.actions;
export const selectSession = (state) => state.auth.sessionId;
export const selectAccount = (state) => state.auth.account;

export default authSlice.reducer;
