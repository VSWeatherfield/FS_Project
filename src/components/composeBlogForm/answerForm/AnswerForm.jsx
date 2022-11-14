import { useState } from "react";
import { Link } from "react-router-dom";

import "./answerForm.css";

const AnswerForm = (props) => {
  const { onClose, submitTitle, answerBlog, onSubmitForm } = props;

  const [description, setDescirption] = useState();

  const onSubmit = (event) => {
    event.preventDefault();

    onSubmitForm({ description });
    onClose();
  };

  const handleChangeDescription = (event) => {
    setDescirption(event.target.value);
  };

  return (
    <div
      id="reply-control"
      className="open composer-action-createTopic edit-title topic show-preview ember-view"
    >
      <div className="grippie"></div>

      <div
        role="form"
        aria-label="Создать тему"
        className="reply-area with-tags"
      >
        <div className="reply-to">
          <div className="reply-details">
            <div id="ember436" className="composer-action-title ember-view">
              <Link to={`/blog/${answerBlog.id}`} className="answerTitle">
                <span className="action-title reply-title">
                  {answerBlog.title}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div id="ember448" className="toolbar-visible wmd-controls ember-view">
          <div id="ember449" className="d-editor ember-view">
            <div className="d-editor-container">
              <div className="d-editor-textarea-column">
                <div className="d-editor-textarea-wrapper">
                  <textarea
                    aria-label='Введите текст здесь. Поддерживаемые форматы: Markdown, BBCode и HTML. Чтобы вставить картинку, перетащите её сюда или вставьте с помощью Ctrl+V, Command-V, либо нажмите правой кнопкой мыши и выберите из меню пункт "Вставить".'
                    autoComplete="off"
                    placeholder='Введите текст здесь. Поддерживаемые форматы: Markdown, BBCode и HTML. Чтобы вставить картинку, перетащите её сюда или вставьте с помощью Ctrl+V, Command-V, либо нажмите правой кнопкой мыши и выберите из меню пункт "Вставить".'
                    name="description"
                    id="ember472"
                    className="d-editor-input ember-text-area ember-view"
                    value={description}
                    onChange={handleChangeDescription}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="d-editor-preview-wrapper ">
              <div className="d-editor-preview"></div>
              <span id="ember475" className="d-editor-plugin ember-view"></span>
            </div>
          </div>
        </div>

        <div className="submit-panel">
          <div className="save-or-cancel">
            <button
              title="Или нажмите Ctrl+Enter"
              id="ember486"
              className="btn btn-icon-text btn-primary create ember-view"
              type="button"
              onClick={onSubmit}
            >
              <span className="d-button-label">{submitTitle}</span>
            </button>

            <button
              className="cancel btn btn-icon-text btn-primary create ember-view"
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerForm;
