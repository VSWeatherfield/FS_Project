import Latex from "react-latex";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Loader } from "../../../components";

import VSImage from "../../../images/VSWeatherfield.png";

const AnswerItem = ({ answerId }) => {
  const ansl = useSelector((state) => state.answers.answerObj[answerId]);

  return ansl ? (
    <div className="topic-post clearfix group-up-quarks regular">
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
                  <Link to="/profile" data-user-card="CappuccinosBurritos">
                    Vladimir Smirnov
                  </Link>
                </span>
                <span className="second username">
                  <Link to="/profile" data-user-card="CappuccinosBurritos">
                    CappuccinosBurritos
                  </Link>
                </span>
              </div>
            </div>

            <div className="regular contents">
              <div className="cooked">
                <Latex>{ansl.description}</Latex>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  ) : (
    <Loader />
  );
};

export default AnswerItem;
