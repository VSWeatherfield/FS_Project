import { createSlice } from "@reduxjs/toolkit";
import { schema, normalize } from "normalizr";

const initialState = {
  answerIds: [],
  answerObj: {},
};

const userSchema = new schema.Entity("users");
const ansSchema = new schema.Entity("answers", {
  users: [userSchema],
});

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    setAnswers: (state, action) => {
      const { entities, result } = normalize(action.payload, [ansSchema]);

      state.answerIds = result;
      state.answerObj = { ...state.answerObj, ...entities.answers };
      state.users = { ...state.users, ...entities.users };
    },
    setAswersMore: (state, action) => {
      const { entities, result } = normalize(action.payload, [ansSchema]);

      state.answerIds = [...state.answerIds, ...result];
      state.answerObj = { ...state.answerObj, ...entities.answers };
      state.users = { ...state.users, ...entities.users };
    },
  },
});

export const answersReducer = answersSlice.reducer;
export const { setAnswers, setAnswersMore } = answersSlice.actions;
