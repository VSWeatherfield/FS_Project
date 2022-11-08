import { configureStore } from "@reduxjs/toolkit";

import { blogsReducer } from "./slices/blogs";
import { composeModalReducer } from "./slices/composeModal";
import { entryModalReducer } from "./slices/entryModal";
import { olympsReducer } from "./slices/olympiads";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    olymps: olympsReducer,
    composeModal: composeModalReducer,
    entryModal: entryModalReducer,
  },
});
