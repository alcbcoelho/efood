import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  visibility: boolean;
  menuItemToRender: MenuItem;
};

const initialState: InitialState = {
  visibility: false,
  menuItemToRender: {
    id: 0,
    nome: "",
    foto: "",
    preco: 0,
    descricao: "",
    porcao: ""
  }
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setVisibility: (state, action: PayloadAction<boolean>) => {
      state.visibility = action.payload;
    },
    renderMenuItem: (state, action: PayloadAction<MenuItem>) => {
      state.menuItemToRender = action.payload;
    }
  }
});

export const { setVisibility, renderMenuItem } = modalSlice.actions;
export default modalSlice.reducer;
