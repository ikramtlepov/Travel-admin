import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
  showLang: false,
  selectLang: "ENG",
  showModalAlert: false,
  deleteItemId : undefined,
  modalType: "" 
};

const pageActionSlice = createSlice({
  name: "page-actions",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    toggleLang: (state) => {
      state.showLang = !state.showLang;
    },
    setSelectLang: (state, action) => {
      state.selectLang = action.payload;
    },
    toggleModalAlert: (state, action) => {
      state.showModalAlert = !state.showModalAlert;
      if (action.payload) {
        state.modalType = action.payload;
      }
    },
    setDeleteItemId: (state, action) => {
      state.deleteItemId = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    }
  }
});

export const {
  toggleSidebar,
  toggleLang,
  setSelectLang,
  toggleModalAlert,
  setDeleteItemId,
  setModalType
} = pageActionSlice.actions;

export default pageActionSlice.reducer;
