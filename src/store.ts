import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// typeof is a keyword that is used to differentiate between different types in TypeScript. 
// Using typeof, we can figure out differences between numbers, strings, boolean, etc. 
// It can be used with any type, also we can reuse the code by passing any parameter type.

export default store;