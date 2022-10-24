import React from "react";
import { Link } from "react-router-dom";

import "./blog-create.css";

const BlogCreate = () => {
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
              <details
                id="ember437"
                className="select-kit single-select dropdown-select-box composer-actions ember-view"
              >
                <summary
                  aria-label="Выберите значение для фильтра"
                  name="Выберите значение для фильтра"
                  data-name=""
                  role="listbox"
                  id="ember437-header"
                  className="select-kit-header single-select-header dropdown-select-box-header btn no-text btn-icon ember-view"
                >
                  <div className="select-kit-header-wrapper"></div>
                </summary>
              </details>

              <span className="action-title">Создать новую тему</span>
            </div>
          </div>
        </div>

        <div id="ember448" className="toolbar-visible wmd-controls ember-view">
          <div id="ember449" className="d-editor ember-view">
            <div className="d-editor-container">
              <div className="d-editor-textarea-column">
                <div className="composer-fields">
                  <div className="title-and-category with-preview">
                    <div id="ember451" className="title-input ember-view">
                      <input
                        aria-label="Название: суть темы коротким предложением"
                        maxLength="255"
                        autoComplete="off"
                        placeholder="Название: суть темы коротким предложением"
                        id="reply-title"
                        className="ember-text-field ember-view"
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="d-editor-textarea-wrapper">
                  <textarea
                    aria-label='Введите текст здесь. Поддерживаемые форматы: Markdown, BBCode и HTML. Чтобы вставить картинку, перетащите её сюда или вставьте с помощью Ctrl+V, Command-V, либо нажмите правой кнопкой мыши и выберите из меню пункт "Вставить".'
                    autoComplete="off"
                    placeholder='Введите текст здесь. Поддерживаемые форматы: Markdown, BBCode и HTML. Чтобы вставить картинку, перетащите её сюда или вставьте с помощью Ctrl+V, Command-V, либо нажмите правой кнопкой мыши и выберите из меню пункт "Вставить".'
                    id="ember472"
                    className="d-editor-input ember-text-area ember-view"
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
            >
              <span className="d-button-label">Создать тему</span>
            </button>

            <a
              href=""
              className="cancel"
              data-ember-action=""
              data-ember-action-487="487"
            >
              Закрыть
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCreate;
