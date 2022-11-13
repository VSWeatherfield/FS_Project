import { configureStore } from "@reduxjs/toolkit";

import { blogsReducer } from "./slices/blogs";
import { composeModalReducer } from "./slices/composeModal";
import { entryModalReducer } from "./slices/entryModal";
import { olympsReducer } from "./slices/olympiads";
import { answersReducer } from "./slices/answers";
import { usersReducer } from "./slices/users"

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    answers: answersReducer,
    olymps: olympsReducer,
    users: usersReducer,
    composeModal: composeModalReducer,
    entryModal: entryModalReducer,
  },
});
