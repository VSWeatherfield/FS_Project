import React from "react";
import "./topicheader.css";

const Topicheader = () => {
  return (
    <tr>
      <th
        data-sort-order="default"
        className="default topic-list-data"
        scope="col"
      >
        <span>Тема</span>
      </th>

      <th
        data-sort-order="posts"
        className="postss sortable num topic-list-data"
        scope="col"
        aria-label="Сортировать по ответам"
        tabIndex="0"
        role="button"
        aria-pressed="false"
      >
        <span>Ответов</span>
      </th>

      <th
        data-sort-order="views"
        className="views sortable num topic-list-data"
        scope="col"
        aria-label="Сортировать по просмотрам"
        tabIndex="0"
        role="button"
        aria-pressed="false"
      >
        <span>Просм.</span>
      </th>

      <th
        data-sort-order="activity"
        className="activity sortable num topic-list-data"
        scope="col"
        aria-label="Сортировать по активности"
        tabIndex="0"
        role="button"
        aria-pressed="false"
      >
        <span>Активность</span>
      </th>
    </tr>
  );
};

export default Topicheader;
