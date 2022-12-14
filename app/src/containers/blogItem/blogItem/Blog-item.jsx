import Latex from "react-latex";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { openComposeModal } from "../../../slices/composeModal";
import { AnswerList } from "../../../containers";

<<<<<<< HEAD
import VSImage from "../../../images/VSWeatherfield.png";
=======
import defaultUser from "../../../images/default-user.jpg";
>>>>>>> uni-version
import pencilArt from "../../../images/pencil-art.png";

import "./blog-item.css";

const BlogItem = (props) => {
  const dispatch = useDispatch();
  const { blog } = props;

<<<<<<< HEAD
  const user = useSelector((state) => state.user.user);
=======
  const current_user = useSelector((state) => state.user.user);

  const author = blog?.user;
  const author_profile = useSelector(
    (state) => state.profiles.profileObj[author?.id]
  );
>>>>>>> uni-version

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
                              {author && author_profile ? (
                                <img
                                  width="45"
                                  height="45"
                                  loading="lazy"
                                  className="avatar"
                                  src={author_profile.user_image}
                                />
                              ) : (
                                <img
                                  width="45"
                                  height="45"
                                  loading="lazy"
                                  className="avatar"
                                  src={defaultUser}
                                />
                              )}
                            </a>
                          </div>
                        </div>

                        <div className="topic-body clearfix">
                          <div role="heading" className="topic-meta-data">
                            <div className="names trigger-user-card">
                              <span className="first full-name">
                                {blog.user.first_name} {blog.user.last_name}
                              </span>
                              <span className="second username">
                                {blog.user.username}
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
<<<<<<< HEAD
                                {user && user.id === blog.user && (
                                  <button className="widget-button btn-flat bookmark with-reminder no-text btn-icon" title="??????????????????????????">
                                    <img
                                      width="45"
                                      height="45"
                                      loading="lazy"
                                      className="fa d-icon d-icon-bookmark svg-icon svg-node"
                                      src={pencilArt}
                                      onClick={handleEditClick}
                                    />
                                  </button>)}
=======
                                  {current_user &&
                                    current_user.id === blog.user.id && (
                                      <button
                                        className="widget-button btn-flat bookmark with-reminder no-text btn-icon"
                                        title="??????????????????????????"
                                      >
                                        <img
                                          width="45"
                                          height="45"
                                          loading="lazy"
                                          className="fa d-icon d-icon-bookmark svg-icon svg-node"
                                          src={pencilArt}
                                          onClick={handleEditClick}
                                        />
                                      </button>
                                    )}
>>>>>>> uni-version

                                  <button
                                    className="widget-button btn-flat reply create fade-out btn-icon-text"
                                    title="???????????? ?????????????????????? ???????????? ???? ??????????????????"
                                    aria-label="???????????????? ???? ?????????????????? #1 ???? ???????????????????????? @CappuccinosBurritos"
                                    onClick={handleAnswerClick}
                                  >
                                    <span className="d-button-label">
                                      ????????????????
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
