import { createSlice } from "@reduxjs/toolkit";
import { schema, normalize } from "normalizr";

const initialState = {
  userNames: [],
  userObjs: {},
};

const userSchema = new schema.Entity("users");

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      const { entities, result } = normalize(action.payload, [userSchema]);

      state.userNames = result;
      state.userObjs = { ...state.userObjs, ...entities.users };
    },
    setUsersMore: (state, action) => {
      const { entities, result } = normalize(action.payload, [userSchema]);

      state.userNames = [...state.userNames, ...result];
      state.userObjs = { ...state.userObjs, ...entities.users };
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { setUsers, setUsersMore } = usersSlice.actions;
