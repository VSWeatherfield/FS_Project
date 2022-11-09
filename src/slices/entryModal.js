import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalData: null,
  modalName: null,
  userName: null,
};

const entryModalSlice = createSlice({
  name: "entryModal",
  initialState,
  reducers: {
    openEntryModal: (state, action) => {
      state.modalData = action.payload.data;
      state.modalName = action.payload.name;
    },
    closeEntryModal: (state) => {
      state.modalData = null;
      state.modalName = null;
    },
  },
});

export const entryModalReducer = entryModalSlice.reducer;
export const { openEntryModal, closeEntryModal } = entryModalSlice.actions;
