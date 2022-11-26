import { createSlice } from "@reduxjs/toolkit";
import { schema, normalize } from "normalizr";

const initialState = {
  blogIds: [],
  blogObj: {},
  answers: {},
  users: {},
  page: 1,
};

const userSchema = new schema.Entity("users");
const answerSchema = new schema.Entity("answers", {
  user: userSchema,
});
const blogSchema = new schema.Entity("blogs", {
  answer_set: [answerSchema],
  user: userSchema,
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    increasePage: (state) => {
      state.page = state.page + 1;
    },
    setBlogs: (state, action) => {
      const { entities, result } = normalize(action.payload, [blogSchema]);

      state.blogIds = result;
      state.blogObj = { ...state.blogObj, ...entities.blogs };
      state.answers = { ...state.answers, ...entities.answers };
    },
    setBlogsMore: (state, action) => {
      const { entities, result } = normalize(action.payload, [blogSchema]);

      state.blogIds = [...state.blogIds, ...result];
      state.blogObj = { ...state.blogObj, ...entities.blogs };
      state.answers = { ...state.answers, ...entities.answers };
    },
  },
});

export const blogsReducer = blogsSlice.reducer;
export const { setPage, setBlogs, setBlogsMore, increasePage } =
  blogsSlice.actions;
