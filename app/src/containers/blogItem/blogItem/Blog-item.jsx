import Latex from "react-latex";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { openComposeModal } from "../../../slices/composeModal";
import { AnswerList } from "../../../containers";

import VSImage from "../../../images/VSWeatherfield.png";
import pencilArt from "../../../images/pencil-art.png";

import "./blog-item.css";

const BlogItem = (props) => {
  const dispatch = useDispatch();
  const { blog } = props;

  const user = useSelector((state) => state.user.user);

  const handleEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(openComposeModal({ data: blog.id, name: "edit" }));
  };

  const handleAnswerClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(openComposeModal({ data: blog.id, name: "answer" }));
  };

  return (
    <div id="main-outlet-wrapper" className="wrap">
      <div id="main-outlet">
        <div id="topic-title">
          <div className="container">
            <div className="title-wrapper">
              <h1>
                <Link to={`/blog/${blog.id}`}>
                  <Latex>{blog.title}</Latex>
                </Link>
              </h1>

              <div id="ember1794" className="topic-category">
                <div className="badge-wrapper bullet">
                  <span className="badge-category-bg"></span>
                  <span
                    data-drop-close="true"
                    className="badge-category clear-badge"
                  >
                    <span className="category-name">{blog.topic}</span>
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
                            <div className="names trigger-user-card">
                              <span className="first full-name">
                                <Link
                                  to="/profile"
                                  data-user-card="CappuccinosBurritos"
                                >
                                  John Doe
                                  {/*  {user.nameAndSurname} */}
                                </Link>
                              </span>
                              <span className="second username">
                                <Link
                                  to="/profile"
                                  data-user-card="CappuccinosBurritos"
                                >
                                  johndoe
                                  {/* {user.userName} */}
                                </Link>
                              </span>
                            </div>
                          </div>

                          <div className="regular contents">
                            <div className="cooked">
                              <Latex>{blog.description}</Latex>
                            </div>

                            <section className="post-menu-area clearfix">
                              <nav className="post-controls collapsed replies-button-visible">
                                <div className="actions">
                                {user && user.id === blog.user && (
                                  <button className="widget-button btn-flat bookmark with-reminder no-text btn-icon" title="Редактировать">
                                    <img
                                      width="45"
                                      height="45"
                                      loading="lazy"
                                      className="fa d-icon d-icon-bookmark svg-icon svg-node"
                                      src={pencilArt}
                                      onClick={handleEditClick}
                                    />
                                  </button>)}

                                  <button
                                    className="widget-button btn-flat reply create fade-out btn-icon-text"
                                    title="Начать составление ответа на сообщение"
                                    aria-label="Ответить на сообщение #1 от пользователя @CappuccinosBurritos"
                                    onClick={handleAnswerClick}
                                  >
                                    <span className="d-button-label">
                                      Ответить
                                    </span>
                                  </button>
                                </div>
                              </nav>
                            </section>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>

                  <AnswerList blogId={blog.id} />
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
