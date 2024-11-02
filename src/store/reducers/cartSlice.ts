import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  items: MenuItem[];
  purchaseStatus: "pending" | "concluded";
};

const initialState: initialState = {
  items: [],
  purchaseStatus: "pending"
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((_i, index) => index !== action.payload);
    },
    removeAllItems: (state) => {
      state.items = [];
    },
    setPurchaseStatus: (
      state,
      action: PayloadAction<"pending" | "concluded">
    ) => {
      state.purchaseStatus = action.payload;
    }
  }
});

export const { addItem, setPurchaseStatus, removeItem, removeAllItems } =
  cartSlice.actions;
export default cartSlice.reducer;
