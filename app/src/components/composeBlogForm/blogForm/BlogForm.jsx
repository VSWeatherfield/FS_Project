import { useState } from "react";

import "./blogForm.css";

const BlogForm = (props) => {
  const {
    onClose,
    submitTitle,
    onSubmitForm,
    defaultTitle,
    defaultDescription,
    defaultTopic,
  } = props;

  const [title, setTitle] = useState(defaultTitle);
  const [topic, setTopic] = useState(defaultTopic);
  const [description, setDescirption] = useState(defaultDescription);
  const [titleError, setTitleError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitForm({ title, description, topic });
    onClose();
  };

  const handleChangeTitle = (event) => {
    if (event.target.value.length <= 257) {
      setTitle(event.target.value);
      setTitleError("");
    } else {
      setTitleError("Название должно быть меньше 257 символов");
    }
  };

  const handleChangeTopic = (event) => {
    if (event.target.value.length <= 257) {
      setTopic(event.target.value);
      setTitleError("");
    } else {
      setTitleError("Название должно быть меньше 257 символов");
    }
  };

  const handleChangeDescription = (event) => {
    setDescirption(event.target.value);
  };

  return (
    <div id="reply-control" className="open">
      <div className="grippie"></div>

      <div
        role="form"
        aria-label="Создать тему"
        className="reply-area with-tags"
      >
        <div className="reply-to">
          <div className="reply-details">
            <div className="composer-action-title">
              <span className="action-title">Создать новую тему</span>
            </div>
          </div>
        </div>

        <div className="toolbar-visible wmd-controls">
          <div className="d-editor">
            <div className="d-editor-container">
              <div className="d-editor-textarea-column">
                <div className="composer-fields">
                  <div className="title-and-category with-preview">
                    <div className="title-input">
                      <input
                        aria-label="Название: суть темы коротким предложением"
                        maxLength="255"
                        autoComplete="off"
                        placeholder="Название: суть темы коротким предложением"
                        name="title"
                        id="reply-title"
                        value={title || ""}
                        onChange={handleChangeTitle}
                      ></input>

                      <input
                        aria-label="Без категории"
                        maxLength="255"
                        autoComplete="off"
                        placeholder="Без категории"
                        name="title"
                        id="form-topic-title"
                        value={topic || ""}
                        onChange={handleChangeTopic}
                      ></input>
                      <div className="title-form-error">{titleError}</div>
                    </div>
                  </div>
                </div>

                <div className="d-editor-textarea-wrapper">
                  <textarea
                    aria-label='Введите текст здесь. Поддерживаемые форматы: Markdown, BBCode и HTML. Чтобы вставить картинку, перетащите её сюда или вставьте с помощью Ctrl+V, Command-V, либо нажмите правой кнопкой мыши и выберите из меню пункт "Вставить".'
                    autoComplete="off"
                    placeholder='Введите текст здесь. Поддерживаемые форматы: Markdown, BBCode и HTML. Чтобы вставить картинку, перетащите её сюда или вставьте с помощью Ctrl+V, Command-V, либо нажмите правой кнопкой мыши и выберите из меню пункт "Вставить".'
                    name="description"
                    className="d-editor-input ember-text-area"
                    value={description || ""}
                    onChange={handleChangeDescription}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="d-editor-preview-wrapper ">
              <div className="d-editor-preview"></div>
              <span className="d-editor-plugin"></span>
            </div>
          </div>
        </div>

        <div className="submit-panel">
          <div className="save-or-cancel">
            <button
              title="Или нажмите Ctrl+Enter"
              className="btn btn-icon-text btn-primary create"
              type="button"
              onClick={onSubmit}
            >
              <span className="d-button-label">{submitTitle}</span>
            </button>

            <button
              className="cancel btn btn-icon-text btn-primary create"
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

export default BlogForm;
