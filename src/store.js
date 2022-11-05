import { configureStore } from "@reduxjs/toolkit";

import { blogsReducer } from "./slices/blogs";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});
