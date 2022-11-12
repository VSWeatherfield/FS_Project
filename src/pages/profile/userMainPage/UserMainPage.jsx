import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { UserItem } from "../../";
import { Loader } from "../../../components";
import { submitEntryModal, closeEntryModal } from "../../../slices/entryModal";

import "./userMainPage.css";
import VSImage from "../../../images/VSWeatherfield.png";

export function UserMainPage(props) {
  const dispatch = useDispatch();
  const { id, mailField } = props;
  const user = useSelector((state) => state.entryModal.userName);
  const { userName } = user;

  const handleLogOutClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(submitEntryModal({ username: null }));
    dispatch(closeEntryModal());
  };

  return (
    <>
      {user ? (
        <aside>
          <div id="main-outlet-wrapper" className="wrap" role="main">
            <div id="main-outlet">
              <div className="container viewing-self">
                <div className="user-main">
                  <section className="about no-background">
                    <div className="details">
                      <div className="primary">
                        <div className="user-profile-avatar">
                          <img
                            src={VSImage}
                            loading="lazy"
                            width="120"
                            height="120"
                            className="avatar"
                          />
                        </div>

                        <section className="controls">
                          <ul>
                            <li>
                              <button
                                aria-controls="collapsed-info-panel"
                                aria-expanded="true"
                                aria-label="Выйти"
                                className="btn-default btn btn-icon-text ember-view"
                                type="button"
                                onClick={handleLogOutClick}
                              >
                                <span className="d-button-label">Выйти</span>
                              </button>
                            </li>
                          </ul>
                        </section>

                        <div className="primary-textual">
                          <div className="user-profile-names">
                            <h1 className="full-name">Vladimir Smirnov</h1>
                            <h2 className="username">{userName}</h2>
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
                                18 февр.
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
                                17 июля
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
                            <dd>88</dd>
                          </div>
                          <div>
                            <dt className="trust-level">Уровень доверия</dt>
                            <dd className="trust-level">
                              Обычный пользователь
                            </dd>
                          </div>
                          <div>
                            <dt>Эл. почта</dt>
                            <dd title="voff.smirnoff@gmail.com">{mailField}</dd>
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
                        <ul className="user-stream ember-view">
                          <UserItem />
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default UserMainPage;
