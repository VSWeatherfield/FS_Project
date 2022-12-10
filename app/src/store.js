import { configureStore } from "@reduxjs/toolkit";

import { blogsReducer } from "./slices/blogs";
import { composeModalReducer } from "./slices/composeModal";
import { entryModalReducer } from "./slices/entryModal";
import { olympsReducer } from "./slices/olympiads";
import { answersReducer } from "./slices/answers";
import { userReducer } from "./slices/user";
import { profileReducer } from "./slices/profile";
import { profilesReducer } from "./slices/profiles";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    answers: answersReducer,
    olymps: olympsReducer,
    composeModal: composeModalReducer,
    entryModal: entryModalReducer,
    user: userReducer,
    profile: profileReducer,
    profiles: profilesReducer,
  },
});
