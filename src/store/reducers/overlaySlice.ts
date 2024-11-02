import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  visibility: boolean;
  menuItemToRender?: MenuItem;
  closeable: boolean;
};

const initialState: InitialState = {
  visibility: false,
  closeable: true
};

const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    setVisibility: (state, action: PayloadAction<boolean>) => {
      state.visibility = action.payload;
    },
    setCloseable: (state, action: PayloadAction<boolean>) => {
      state.closeable = action.payload;
    },
    renderMenuItem: (state, action: PayloadAction<MenuItem>) => {
      state.menuItemToRender = action.payload;
    },
    renderSidebar: (state) => {
      state.menuItemToRender = undefined;
    }
  }
});

export const { setVisibility, setCloseable, renderSidebar, renderMenuItem } =
  overlaySlice.actions;
export default overlaySlice.reducer;
