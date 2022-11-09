import { useDispatch, useSelector } from "react-redux";

import { LoginPage, SignUpPage, PageForm } from "..";
import { closeEntryModal } from "../../slices/entryModal";

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
          <PageForm
            onClose={() => {
              dispatch(closeEntryModal());
            }}
          >
            <LoginPage />
          </PageForm>
        );
      }

      case "signUp": {
        return (
          <PageForm
            onClose={() => {
              dispatch(closeEntryModal());
            }}
          >
            <SignUpPage />
          </PageForm>
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
