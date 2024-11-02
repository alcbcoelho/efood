import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { SidebarElement } from "../../components/Sidebar";

interface InitialState {
  elementToRender: keyof SidebarElement;
}

const initialState: InitialState = {
  elementToRender: "cart"
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changeElementToRender: (
      state,
      action: PayloadAction<keyof SidebarElement>
    ) => {
      state.elementToRender = action.payload;
    }
  }
});

export const { changeElementToRender } = sidebarSlice.actions;
export default sidebarSlice.reducer;
