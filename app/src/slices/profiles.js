import { createSlice } from "@reduxjs/toolkit";
import { schema, normalize } from "normalizr";

const initialState = {
  profileIds: [],
  profileObj: {},
};

const userSchema = new schema.Entity("users");
const proSchema = new schema.Entity("profiles", {
  users: [userSchema],
});

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    setProfiles: (state, action) => {
      const { entities, result } = normalize(action.payload, [proSchema]);

      state.profileIds = result;
      state.profileObj = { ...state.profileObj, ...entities.profiles };
      state.users = { ...state.users, ...entities.users };
    },
  },
});

export const profilesReducer = profilesSlice.reducer;
export const { setProfiles } = profilesSlice.actions;
