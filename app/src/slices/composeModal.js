import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalData: null,
  modalName: null,
};

const composeModalSlice = createSlice({
  name: "composeModal",
  initialState,
  reducers: {
    openComposeModal: (state, action) => {
      state.modalData = action.payload.data;
      state.modalName = action.payload.name;
    },
    closeComposeModal: (state) => {
      state.modalData = null;
      state.modalName = null;
    },
  },
});

export const composeModalReducer = composeModalSlice.reducer;
export const { openComposeModal, closeComposeModal } =
  composeModalSlice.actions;
