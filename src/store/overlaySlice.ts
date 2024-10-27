import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  visibility: boolean;
  menuItemToRender?: MenuItem;
};

const initialState: InitialState = {
  visibility: false,
  menuItemToRender: undefined
};

const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    setVisibility: (state, action: PayloadAction<boolean>) => {
      state.visibility = action.payload;
    },
    renderMenuItem: (state, action: PayloadAction<MenuItem>) => {
      state.menuItemToRender = action.payload;
    },
    renderCartDisplay: (state) => {
      state.menuItemToRender = undefined;
    }
  }
});

export const { setVisibility, renderCartDisplay, renderMenuItem } =
  overlaySlice.actions;
export default overlaySlice.reducer;
