import React from "react";
import { Link } from "react-router-dom";

import "./topixlist.css";

const Topiclist = (props) => {
  const { id, title, description } = props;

  return (
    <tr className="topic-list-item category-informatics unseen-topic ember-view">
      <td className="main-link clearfix topic-list-data" colSpan="1">
        <span className="link-top-line">
          <Link
            to={`/blog/${id}`}
            role="heading"
            aria-level="2"
            className="title raw-link raw-topic-link"
            data-topic-id="5207"
          >
            {title}
          </Link>
        </span>
      </td>

      <td
        className="num posts-map posts  topic-list-data"
        title="В этой теме 2 сообщения"
      >
        <span className="number">2</span>
      </td>

      <td className="num views  topic-list-data">
        <span className="number" title="Тема просмотрена 37 раз">
          37
        </span>
      </td>

      <td className="num topic-list-data age activity">
        <a className="post-activity" href="/t/vkoshp-2020-2021/5207/3">
          <span
            className="relative-date"
            data-time="1666457689608"
            data-format="tiny"
          >
            3ч
          </span>
        </a>
      </td>
    </tr>
  );
};

export default Topiclist;
