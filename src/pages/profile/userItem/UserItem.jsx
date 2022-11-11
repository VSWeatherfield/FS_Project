import { Link } from "react-router-dom";
import VSImage from "../../../images/VSWeatherfield.png";

import "./userItem.css";

const UserItem = () => {
  return (
    <li id="ember662" class="user-stream-item item ember-view">
      <div class="user-stream-item__header info">
        <div class="avatar-link">
          <div class="avatar-wrapper">
            <img
              src={VSImage}
              loading="lazy"
              width="45"
              height="45"
              className="avatar actor"
            />
          </div>
        </div>

        <div class="user-stream-item__details">
          <div class="stream-topic-title">
            <span class="title">
              <Link to="/blog/29">
                Классическая задача на квадратичные вычеты
              </Link>
            </span>
          </div>

          <div class="category">
            <div class="badge-wrapper bullet">
              <span class="badge-category-bg"></span>

              <span data-drop-close="true" class="badge-category clear-badge">
                <span class="category-name">Теория Чисел</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <p data-topic-id="4125" data-user-id="643" class="excerpt">
        Ботал что-то как обычно и наткнулся опять на данную задачу: Докажите что
        любое простое число вида 4k+1 представимо в виде суммы двух квадратов
        Пункт шел со звездочкой и решения поэтому не приводилось. Заниматься
        олимпиадами перестал давно, но помню что в свое время брали утверждение
        просто за данн…
      </p>
    </li>
  );
};

export default UserItem;