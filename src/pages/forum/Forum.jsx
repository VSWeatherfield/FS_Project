import React from 'react'
import './forum.css'

import { Topicheader, Topiclist } from '../../components'

const Forum = () => {
  return (
    <div className='d-forum'>
      <div className='wrap'>
        <div className='forum-panel'>
          <div className='leftButtons'>
            <button class="sections-button btn btn-primary btn-small">
              <span class="d-button-label">
                Разделы
              </span>
            </button>
          <button class="recent-button btn btn-primary btn-small">
            <span class="d-button-label">
              Последние
            </span>
          </button>
        </div>
        <div className='rightButtons'>
          <button class="new-post-button btn btn-primary btn-small">
            <span class="d-button-label">
              Создать тему
            </span>
          </button>
        </div>
      </div>
      <div className='contents'>
        <span className='ember-view'>

          <table className='topic-list ember-view'>

            <thead className='topic-list-header'>
              <Topicheader />
            </thead>

            <tbody className='topic-list-body'>
              <Topiclist />
              <Topiclist />
              <Topiclist />
              <Topiclist />
              <Topiclist />
              <Topiclist />
              <Topiclist />
              <Topiclist />
              <Topiclist />
              <Topiclist />
              <Topiclist />
              <Topiclist />
            </tbody>
          </table>
        </span>
      </div>  
    </div>    
  </div>
  )
}

export default Forum;