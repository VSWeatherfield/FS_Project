import React from "react";
import { Link } from "react-router-dom";

import "./forum.css";
import { Topicheader, Topiclist } from "../../components";

const Forum = () => {
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
            <button className="new-post-button btn btn-primary btn-small">
              <span className="d-button-label">
                <Link
                  to="/blog-create"
                  data-auto-route="true"
                  className="new-post-link"
                >
                  Создать тему
                </Link>
              </span>
            </button>
          </div>
        </div>
        <div className="contents">
          <span className="ember-view">
            <table className="topic-list ember-view">
              <thead className="topic-list-header">
                <Topicheader />
              </thead>

              <tbody className="topic-list-body"></tbody>
            </table>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Forum;
