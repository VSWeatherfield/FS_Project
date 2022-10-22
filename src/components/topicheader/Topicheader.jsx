import React from 'react'
import './topicheader.css'

const Topiclist = () => {
  return (
    <tr>
        <th data-sort-order="default" class="default topic-list-data" scope="col">
            <span>
            Тема
            </span>
        </th>

        <th data-sort-order="posters" class="posters topic-list-data" scope="col" aria-label="Количество участников">
            <span>
            </span>
            <th data-sort-order="default" class="default topic-list-data" scope="col">
            <span>Тема</span>
            </th>
        </th>

        <th data-sort-order="posts" class="posts sortable num topic-list-data" scope="col" aria-label="Сортировать по ответам" tabindex="0" role="button" aria-pressed="false">
            <span>
            Ответов
            </span>
        </th>

        <th data-sort-order="views" class="views sortable num topic-list-data" scope="col" aria-label="Сортировать по просмотрам" tabindex="0" role="button" aria-pressed="false">
            <span>
            Просм.
            </span>
        </th>

        <th data-sort-order="activity" class="activity sortable num topic-list-data" scope="col" aria-label="Сортировать по активности" tabindex="0" role="button" aria-pressed="false">
            <span>
            Активность
            </span>
        </th>
    </tr>
  )
}

export default Topiclist;