import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { configureStore } from "@reduxjs/toolkit";

import { blogsReducer } from "./slices/blogs";
import { composeModalReducer } from "./slices/composeModal";
import { entryModalReducer } from "./slices/entryModal";
import { olympsReducer } from "./slices/olympiads";
import { answersReducer } from "./slices/answers";
import { usersReducer } from "./slices/users";
import { userReducer } from "./slices/user";
import { profileReducer } from "./slices/profile";
import auth from "./reducers/auth"

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    answers: answersReducer,
    olymps: olympsReducer,
    users: usersReducer,
    composeModal: composeModalReducer,
    entryModal: entryModalReducer,
    user: userReducer,
    profile: profileReducer,
    auth: auth,
  },
});

export default store;