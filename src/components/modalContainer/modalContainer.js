import { useDispatch, useSelector } from "react-redux";

import { CreateBlog, EditBlog } from "../../components";
import { closeModal } from "../../slices/modal";

export function ModalContainer() {
  const dispatch = useDispatch();
  const { modalData, modalName } = useSelector((state) => state.modal);

  if (!modalName) {
    return null;
  }

  function renderContent() {
    switch (modalName) {
      case "edit": {
        return (
          <EditBlog
            id={modalData}
            onClose={() => {
              dispatch(closeModal());
            }}
          />
        );
      }

      case "create": {
        return (
          <CreateBlog
            onClose={() => {
              dispatch(closeModal());
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
