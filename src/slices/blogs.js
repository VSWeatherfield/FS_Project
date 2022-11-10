import { createSlice, current } from "@reduxjs/toolkit";
import { schema, normalize } from "normalizr";

const initialState = {
  blogIds: [],
  blogObj: {},
  posts: {},
  comments: {},
  page: 1,
};

const userSchema = new schema.Entity("user");
const commentSchema = new schema.Entity("comments", { user: userSchema });
const postSchema = new schema.Entity("posts", {
  comments: [commentSchema],
  user: userSchema,
});
const blogSchema = new schema.Entity("blogs", {
  posts: [postSchema],
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
      state.posts = { ...state.posts, ...entities.posts };
      state.comments = { ...state.comments, ...entities.comments };
    },
    setBlogsMore: (state, action) => {
      const { entities, result } = normalize(action.payload, [blogSchema]);

      state.blogIds = [...state.blogIds, ...result];
      state.blogObj = { ...state.blogObj, ...entities.blogs };
      state.posts = { ...state.posts, ...entities.posts };
      state.comments = { ...state.comments, ...entities.comments };
    },
  },
});

export const blogsReducer = blogsSlice.reducer;
export const { setPage, setBlogs, setBlogsMore, increasePage } =
  blogsSlice.actions;
