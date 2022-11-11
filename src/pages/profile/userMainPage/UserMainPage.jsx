import { UserItem } from "../../"

import "./userMainPage.css";
import VSImage from "../../../images/VSWeatherfield.png";

export function UserMainPage(props) {
    const { id, userName, mailField } = props;

  return (
    <aside>
      <div id="main-outlet-wrapper" className="wrap" role="main">
        <div id="main-outlet">
          <div className="container viewing-self">
            <div className="user-main">
              <section className="about no-background">
                <div className="details">
                  <div className="primary">
                    <div class="user-profile-avatar">
                      <img
                        src={VSImage}
                        loading="lazy"
                        width="120"
                        height="120"
                        className="avatar"
                      />
                    </div>

                    <div class="primary-textual">
                      <div class="user-profile-names">
                        <h1 class="full-name">Vladimir Smirnov</h1>
                        <h2 class="username">{userName}</h2>
                      </div>
                    </div>
                  </div>

                  <div class="secondary" id="collapsed-info-panel">
                    <dl>
                      <div>
                        <dt>Вступил(-а)</dt>
                        <dd>
                          <span
                            class="relative-date date"
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
                            class="relative-date date"
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
                            class="relative-date date"
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
                        <dt class="trust-level">Уровень доверия</dt>
                        <dd class="trust-level">Обычный пользователь</dd>
                      </div>
                      <div>
                        <dt>Эл. почта</dt>
                        <dd title="voff.smirnoff@gmail.com">
                          {mailField}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              <div class="new-user-wrapper">
                <section class="user-navigation user-navigation-primary">
                  <div class="horizontal-overflow-nav">Активность:</div>
                </section>

                <div class="new-user-content-wrapper">
                  <section class="user-content">
                    <ul id="ember661" class="user-stream ember-view">
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
  );
}

export default UserMainPage;
