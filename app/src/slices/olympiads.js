import { createSlice } from "@reduxjs/toolkit";
import { schema, normalize } from "normalizr";

const initialState = {
  olympNames: [],
  olympObjs: {},
  years: {},
};

const yearSchema = new schema.Entity("years");
const olympSchema = new schema.Entity("olymps", {
  years: [yearSchema],
});

const olympsSlice = createSlice({
  name: "olymps",
  initialState,
  reducers: {
    setOlymps: (state, action) => {
      const { entities, result } = normalize(action.payload, [olympSchema]);

      state.olympNames = result;
      state.olympObjs = { ...state.olympObjs, ...entities.olymps };
      state.years = { ...state.years, ...entities.years };
    },
    setOlympsMore: (state, action) => {
      const { entities, result } = normalize(action.payload, [olympSchema]);

      state.olympNames = [...state.olympNames, ...result];
      state.olympObjs = { ...state.olympObjs, ...entities.olymps };
      state.years = { ...state.years, ...entities.years };
    },
  },
});

export const olympsReducer = olympsSlice.reducer;
export const { setOlymps, setOlympsMore } = olympsSlice.actions;
