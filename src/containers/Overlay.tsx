import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";

import { setVisibility as setOverlayVisibility } from "../store/overlaySlice";

import Modal from "../components/Modal";
import CartDisplay from "../components/CartDisplay";

import * as s from "./styles/Overlay";

export default function Overlay() {
  const menuItem = useSelector(
    (state: RootState) => state.overlay.menuItemToRender
  );
  const visibility = useSelector(
    (state: RootState) => state.overlay.visibility
  );
  const dispatch = useDispatch();

  const closeOverlay = () => {
    dispatch(setOverlayVisibility(false));
  };

  if (visibility)
    return (
      <s.Overlay onClick={closeOverlay}>
        {menuItem ? (
          <Modal menuItemToRender={menuItem} />
        ) : (
          <CartDisplay onClick={(e) => e.stopPropagation()} />
        )}
      </s.Overlay>
    );
}
