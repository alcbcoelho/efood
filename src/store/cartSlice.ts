import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  items: MenuItem[];
};

const initialState: initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i, index) => index !== action.payload);
    },
    removeAllItems: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, removeAllItems } = cartSlice.actions;
export default cartSlice.reducer;
