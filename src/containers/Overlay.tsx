import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";

import { setVisibility as setOverlayVisibility } from "../store/reducers/overlaySlice";
import { changeElementToRender } from "../store/reducers/sidebarSlice";

import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";

import * as s from "./styles/Overlay";

export default function Overlay() {
  const menuItem = useSelector(
    (state: RootState) => state.overlay.menuItemToRender
  );
  const overlayState = useSelector((state: RootState) => state.overlay);
  const { visibility, closeable } = overlayState;
  const purchaseStatus = useSelector(
    (state: RootState) => state.cart.purchaseStatus
  );
  const dispatch = useDispatch();

  const closeOverlay = () => {
    if (closeable) dispatch(setOverlayVisibility(false));
    if (purchaseStatus === "concluded") dispatch(changeElementToRender("cart"));
  };

  if (visibility)
    return (
      <s.Overlay onClick={closeOverlay}>
        {menuItem ? (
          <Modal menuItemToRender={menuItem} />
        ) : (
          <Sidebar onClick={(e) => e.stopPropagation()} />
        )}
      </s.Overlay>
    );
}
