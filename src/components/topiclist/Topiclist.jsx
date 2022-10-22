import React from 'react'
import './topixlist.css'

const Topiclist = () => {
  return (
  <tr class="topic-list-item category-informatics unseen-topic ember-view">
    <td class="main-link clearfix topic-list-data" colspan="1">
        <span class="link-top-line">
        <a href="/t/vkoshp-2020-2021/5207" role="heading" aria-level="2" class="title raw-link raw-topic-link" data-topic-id="5207">
            Вкошп 2020-2021
        </a>
        </span>
    </td>

    <td class="posters topic-list-data">
        <a href="/u/pseudo" data-user-card="pseudo" class="">
        Not An. Name  
        </a>
    </td>

    <td class="num posts-map posts  topic-list-data" title="В этой теме 2 сообщения">
        <span class="number">
            2
        </span>
    </td>

    <td class="num views  topic-list-data">
        <span class="number" title="Тема просмотрена 37 раз">
        37
        </span>
    </td>

    <td class="num topic-list-data age activity">
        <a class="post-activity" href="/t/vkoshp-2020-2021/5207/3">
        <span class="relative-date" data-time="1666457689608" data-format="tiny">
            3ч
        </span>
        </a>
    </td>
  </tr>
  )
}

export default Topiclist;