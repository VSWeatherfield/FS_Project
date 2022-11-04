import { Topicheader } from "../../components";

import plus_img from "../../images/plus.png";
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
              <span class="fa d-icon d-icon-plus svg-icon svg-string">
                <img src={plus_img} alt="plus" />
              </span>
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

        <div class="more-topics">
          <a href="/olympiads" class="btn btn-default pull-right">
            Больше
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forum;
