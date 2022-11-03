import React from "react";
import { Topicheader, Topiclist } from "../../components";

import "./forum.css";

const Forum = (props) => {
  const { blogs, openopen } = props;

  const handleNewClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    openopen();
  };

  return (
    <div className="d-forum">
      <div className="wrap">
        <div className="forum-panel">
          <div className="leftButtons">
            <button className="sections-button btn btn-primary btn-small">
              <span className="d-button-label">Разделы</span>
            </button>
            <button className="recent-button btn btn-primary btn-small">
              <span className="d-button-label">Последние</span>
            </button>
          </div>
          <div className="rightButtons">
            <button
              className="new-post-button btn btn-primary btn-small"
              onClick={handleNewClick}
            >
              <span className="d-button-label">Создать тему</span>
            </button>
          </div>
        </div>
        <div className="contents">
          <span className="ember-view">
            <table className="topic-list ember-view">
              <thead className="topic-list-header">
                <Topicheader />
              </thead>

              <tbody className="topic-list-body"> {blogs} </tbody>
            </table>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Forum;
