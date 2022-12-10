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

    updateAnswer: (state, action) => {
      const { entities, result } = normalize(action.payload, ansSchema);

      state.answerObj = {
        ...state.answerObj,
        [result]: entities.answers[result],
      };
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
export const { setAnswers, updateAnswer, setAnswersMore } =
  answersSlice.actions;
