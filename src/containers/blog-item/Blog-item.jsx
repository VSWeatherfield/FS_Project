import Latex from "react-latex";
import { Link } from "react-router-dom";

import { AnswerItem } from "../../components"

import VSImage from "../../images/VSWeatherfield.png";
import "./blog-item.css";

const BlogItem = (props) => {
  const { id, title, description } = props;

  return (
    <div id="main-outlet-wrapper" className="wrap">
      <div id="main-outlet">
        <div id="topic-title">
          <div className="container">
            <div className="title-wrapper">
              <h1>
                <Link to={`/blog/${id}`}>
                  <Latex>{title}</Latex>
                </Link>
              </h1>

              <div id="ember1794" className="topic-category ember-view">
                <div className="badge-wrapper bullet">
                  <span className="badge-category-bg"></span>
                  <span
                    data-drop-close="true"
                    className="badge-category clear-badge"
                  >
                    <span className="category-name">Математика</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container posts">
          <div className="row">
            <section className="topic-area" id="topic">
              <div className="posts-wrapper">
                <div className="topic-stream">
                  <div className="topic-post clearfix topic-owner current-user-post regular">
                    <article
                      id="post_1"
                      role="region"
                      data-post-id="15547"
                      data-topic-id="4125"
                      data-user-id="643"
                      className="boxed onscreen-post"
                    >
                      <div className="row">
                        <div className="topic-avatar user-online">
                          <div className="post-avatar">
                            <a
                              className="trigger-user-card main-avatar "
                              href="/u/CappuccinosBurritos"
                              data-user-card="CappuccinosBurritos"
                              aria-hidden="true"
                              tabIndex="-1"
                            >
                              <img
                                width="45"
                                height="45"
                                loading="lazy"
                                className="avatar"
                                src={VSImage}
                              />
                            </a>
                          </div>
                        </div>

          


                        <div className="topic-body clearfix">
                          <div role="heading" className="topic-meta-data">
                            <div class="names trigger-user-card">
                              <span class="first full-name">
                                <Link
                                  to="/profile"
                                  data-user-card="CappuccinosBurritos"
                                >
                                  Vladimir Smirnov
                                </Link>
                              </span>
                              <span class="second username">
                                <Link
                                  to="/profile"
                                  data-user-card="CappuccinosBurritos"
                                >
                                  CappuccinosBurritos
                                </Link>
                              </span>
                            </div>
                          </div>

                          <div className="regular contents">
                            <div className="cooked">
                              <Latex>{description}</Latex>
                            </div>

                            <section className="post-menu-area clearfix">
                              <nav class="post-controls collapsed replies-button-visible">
                                <div class="actions">
                                  <button
                                    class="widget-button btn-flat reply create fade-out btn-icon-text"
                                    title="Начать составление ответа на сообщение"
                                    aria-label="Ответить на сообщение #1 от пользователя @CappuccinosBurritos"
                                  >
                                    <span class="d-button-label">Ответить</span>
                                  </button>
                                </div>
                              </nav>
                            </section>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div class="topic-post clearfix group-up-quarks regular">
                    <article
                      id="post_1"
                      role="region"
                      data-post-id="15547"
                      data-topic-id="4125"
                      data-user-id="643"
                      className="boxed onscreen-post"
                    >
                      <div className="row">
                        <div className="topic-avatar user-online">
                          <div className="post-avatar">
                            <a
                              className="trigger-user-card main-avatar "
                              href="/u/CappuccinosBurritos"
                              data-user-card="CappuccinosBurritos"
                              aria-hidden="true"
                              tabIndex="-1"
                            >
                              <img
                                width="45"
                                height="45"
                                loading="lazy"
                                className="avatar"
                                src={VSImage}
                              />
                            </a>
                          </div>
                        </div>

                        <div className="topic-body clearfix">
                          <div role="heading" className="topic-meta-data">
                            <div class="names trigger-user-card">
                              <span class="first full-name">
                                <Link
                                  to="/profile"
                                  data-user-card="CappuccinosBurritos"
                                >
                                  Vladimir Smirnov
                                </Link>
                              </span>
                              <span class="second username">
                                <Link
                                  to="/profile"
                                  data-user-card="CappuccinosBurritos"
                                >
                                  CappuccinosBurritos
                                </Link>
                              </span>
                            </div>
                          </div>

                          <div className="regular contents">
                            <div className="cooked">
                              <Latex>
                                Для доказательства, нам понадобится одна лемма
                                Лемма 1. Для любого p = 4k +1, $$\exists$$ m
                                $\in$ $$\math N : p \\mid m^2 + 1p=4k+1,∃m∈N:p ∣
                                m^2 +1$$
                              </Latex>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
