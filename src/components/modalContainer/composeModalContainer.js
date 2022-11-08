import { useDispatch, useSelector } from "react-redux";

import { CreateBlog, EditBlog } from "..";
import { closeComposeModal } from "../../slices/composeModal";

export function ComposeModalContainer() {
  const dispatch = useDispatch();
  const { modalData, modalName } = useSelector((state) => state.composeModal);

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
              dispatch(closeComposeModal());
            }}
          />
        );
      }

      case "create": {
        return (
          <CreateBlog
            onClose={() => {
              dispatch(closeComposeModal());
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

export default ComposeModalContainer;
