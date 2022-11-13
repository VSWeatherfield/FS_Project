import { configureStore } from "@reduxjs/toolkit";

import { blogsReducer } from "./slices/blogs";
import { composeModalReducer } from "./slices/composeModal";
import { entryModalReducer } from "./slices/entryModal";
import { olympsReducer } from "./slices/olympiads";
import { answersReducer } from "./slices/answers";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    answers: answersReducer,
    olymps: olympsReducer,
    composeModal: composeModalReducer,
    entryModal: entryModalReducer,
  },
});
