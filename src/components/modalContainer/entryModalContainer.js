import { useDispatch, useSelector } from "react-redux";

import { LoginPage, SigUpPage } from "..";
import { closeEntryModal } from "../../slices/composeModal";

export function EntryModalContainer() {
  const dispatch = useDispatch();
  const { modalData, modalName } = useSelector((state) => state.entryModal);

  if (!modalName) {
    return null;
  }

  function renderContent() {
    switch (modalName) {
      case "logIn": {
        return (
          <LoginPage
            id={modalData}
            onClose={() => {
              dispatch(closeEntryModal());
            }}
          />
        );
      }

      case "signUp": {
        return (
          <SigUpPage
            id={modalData}
            onClose={() => {
              dispatch(closeEntryModal());
            }}
          />
        );
      }

      default: {
        return null;
      }
    }
  }

  return <>{renderContent()}</>;
}

export default EntryModalContainer;
