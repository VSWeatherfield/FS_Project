import { useSelector, useDispatch } from "react-redux";
import { increasePage } from "../../../slices/blogs";
import { UseMyBlogs } from "../../../hooks/UseMyBlogs";

import { UserItem } from "../../";

import "./userMainPage.css";
import defaultUser from "../../../images/default-user.jpg";

export function UserMainPage() {
  const dispatch = useDispatch();
  UseMyBlogs();

  const user = useSelector((state) => state.user.user);
  const profile = useSelector((state) => state.profile.profile);
  const myBlogs = useSelector((state) => state.blogs.myBlogIds);

  function onLogout() {
    window.localStorage.setItem("ACCESS", "");
    window.localStorage.setItem("REFRESH", "");
    window.location.href = "/";
  }

  return (
    <>
      <aside>
        <div id="main-outlet-wrapper" className="wrap" role="main">
          <div id="main-outlet">
            <div className="container viewing-self">
              <div className="user-main">
                <section className="about no-background">
                  <div className="details">
                    <div className="primary">
                      <div className="user-profile-avatar">
                        {profile ? (
                          <img
                            src={profile.user_image}
                            loading="lazy"
                            width="120"
                            height="120"
                            className="avatar"
                          />
                        ) : (
                          <img
                            src={defaultUser}
                            loading="lazy"
                            width="120"
                            height="120"
                            className="avatar"
                          />
                        )}
                      </div>

                      <section className="controls">
                        <ul>
                          <li>
                            <button
                              aria-controls="collapsed-info-panel"
                              aria-expanded="true"
                              aria-label="Выйти"
                              className="btn-default btn btn-icon-text"
                              type="button"
                              onClick={onLogout}
                            >
                              <span className="d-button-label">Выйти</span>
                            </button>
                          </li>
                        </ul>
                      </section>

                      <div className="primary-textual">
                        <div className="user-profile-names">
                          <h1 className="full-name">
                            {user ? user.first_name : "John"}{" "}
                            {user ? user.last_name : "Doe"}
                          </h1>
                          <h2 className="username">
                            {user ? user.username : "YaYMamyPirozhok"}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="secondary" id="collapsed-info-panel">
                      <dl>
                        <div>
                          <dt>Вступил(-а)</dt>
                          <dd>
                            <span
                              className="relative-date date"
                              title="18 февр. 2022, 15:05"
                              data-time="1645185954820"
                              data-format="medium"
                            >
                              {profile
                                ? profile.date_activity
                                : "18 февр. 2022"}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt>Последнее сообщение</dt>
                          <dd>
                            <span
                              className="relative-date date"
                              title="17 июля 2022, 19:24"
                              data-time="1658075040818"
                              data-format="medium"
                            >
                              {profile ? profile.last_answer : "17 июля 2022"}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt>Был(-а)</dt>
                          <dd>
                            <span
                              className="relative-date date"
                              title="11 нояб. 2022, 01:10"
                              data-time="1668118201004"
                              data-format="medium"
                            >
                              23 мин
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt>Просм.</dt>
                          <dd>{profile ? profile.num_views : 38}</dd>
                        </div>
                        <div>
                          <dt className="trust-level">Уровень доверия</dt>
                          <dd className="trust-level">Обычный пользователь</dd>
                        </div>
                        <div>
                          <dt>Эл. почта</dt>
                          <dd title="voff.smirnoff@gmail.com">
                            {profile ? user.email : "hzhzhz@gmail.com"}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </section>

                <div className="new-user-wrapper">
                  <section className="user-navigation user-navigation-primary">
                    <div className="horizontal-overflow-nav">Активность:</div>
                  </section>

                  <div className="new-user-content-wrapper">
                    <section className="user-content">
                      <ul className="user-stream">
                        {myBlogs.map((blog) => (
                          <UserItem key={blog} id={blog} profile={profile} />
                        ))}
                      </ul>
                    </section>

                    <div className="more-topics">
                      <button
                        className="btn btn-default pull-right"
                        onClick={() => dispatch(increasePage())}
                      >
                        Больше
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default UserMainPage;
