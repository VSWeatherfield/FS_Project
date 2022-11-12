import Latex from "react-latex";
import { Link } from "react-router-dom";

import VSImage from "../../images/VSWeatherfield.png";

const AnswerItem = () => {
  return (
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
                  <Link to="/profile" data-user-card="CappuccinosBurritos">
                    Vladimir Smirnov
                  </Link>
                </span>
                <span class="second username">
                  <Link to="/profile" data-user-card="CappuccinosBurritos">
                    CappuccinosBurritos
                  </Link>
                </span>
              </div>
            </div>

            <div className="regular contents">
              <div className="cooked">
                <Latex>
                  Для доказательства, нам понадобится одна лемма Лемма 1. Для
                  любого p = 4k +1, $$\exists$$ m $\in$ $$\math N : p \\mid m^2
                  + 1p=4k+1,∃m∈N:p ∣ m^2 +1$$
                </Latex>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AnswerItem;
