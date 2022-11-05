import { createSlice } from "@reduxjs/toolkit";
//import { schema, normalize } from 'normalizr';

const initialState = {
  blogs: [],
  blogIds: [],
  blogObj: {},
  page: 1,
};

function prettifyBlogs(blogs) {
  const blogIds = [];
  const blogObj = [];
  for (let blog of blogs) {
    blogIds.push(blog.it);
    blogObj[blog.id] = blog;
  }

  return {
    blogIds,
    blogObj
  }
}

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
      const { blogIds, blogObj } = prettifyBlogs(action.payload);

      state.blogs = action.payload;
      state.blogIds = blogIds;
      state.blogObj = { ...state.blogObj, ...blogObj };
    },
    setBlogsMore: (state, action) => {
      const { blogIds, blogObj } = prettifyBlogs(action.payload);

      state.blogs = [...state.blogs, ...action.payload];
      state.blogIds = [...state.blogIds, ...blogIds];
      state.blogObj = { ...state.blogObj, ...blogObj };
    },
  },
});

export const blogsReducer = blogsSlice.reducer;
export const { setPage, setBlogs, setBlogsMore, increasePage } =
  blogsSlice.actions;
