import { configureStore } from "@reduxjs/toolkit";

import { blogsReducer } from "./slices/blogs";
import { modalReducer } from "./slices/modal";
import { olympsReducer } from "./slices/olympiads";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    modal: modalReducer,
    olymps: olympsReducer,
  },
});
