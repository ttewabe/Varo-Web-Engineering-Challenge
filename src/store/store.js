import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication-slice";

export const store = configureStore({
  reducer: { auth: authReducer },
});
