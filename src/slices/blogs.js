import { createSlice } from "@reduxjs/toolkit";
//import { schema, normalize } from 'normalizr';

const initialState = {
  blogs: [],
  page: 1,
};

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
      state.blogs = action.payload;
    },
    setBlogsMore: (state, action) => {
      state.blogs = [...state.blogs, ...action.payload];
    },
  },
});

export const blogsReducer = blogsSlice.reducer;
export const { setPage, setBlogs, setBlogsMore, increasePage } =
  blogsSlice.actions;
