import { useState } from "react";
import { wavingHand } from "../../../images/wavingHand.png";
import { cross } from "./cross.png";

import "./pageForm.css";

const PageForm = (props) => {
  const { children } = props;

  const handleOverlayClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    props.onClose();
  };

  const handleModalClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      data-keyboard="false"
      id="discourse-modal"
      className="modal d-modal login-modal fixed-modal ember-view in"
    >
      <div className="modal-outer-container" onClick={handleOverlayClick}>
        <div className="modal-middle-container">
          <div className="modal-inner-container" onClick={handleModalClick}>
            <div class="modal-header">
              <button
                onClick={props.onClose}
                title="закрыть"
                id="ember421"
                class="btn-flat modal-close close btn no-text btn-icon ember-view"
                type="button"
              >
                ✕
              </button>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageForm;
