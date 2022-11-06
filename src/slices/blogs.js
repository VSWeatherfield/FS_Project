import { createSlice } from "@reduxjs/toolkit";
import { schema, normalize } from 'normalizr';

const initialState = {
  blogIds: [],
  blogObj: {},
  page: 1,
};

const blogSchema = new schema.Entity('blogs')

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
    },
    setBlogsMore: (state, action) => {
      const { entities, result } = normalize(action.payload, [blogSchema]);

      state.blogIds = [...state.blogIds, ...result];
      state.blogObj = { ...state.blogObj, ...entities.blogs };

    },
  },
});

export const blogsReducer = blogsSlice.reducer;
export const { setPage, setBlogs, setBlogsMore, increasePage } =
  blogsSlice.actions;
