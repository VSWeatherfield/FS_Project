import Latex from "react-latex";
import { useSelector } from "react-redux";

import { Loader } from "../../../components";

import defaultUser from "../../../images/default-user.jpg";

const AnswerItem = ({ answerId }) => {
  const ansl = useSelector((state) => state.answers.answerObj[answerId]);

  const author = ansl?.user;
  const author_profile = useSelector(
    (state) => state.profiles.profileObj[author?.id]
  );

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
                {author && author_profile ? (
                  <img
                    alt=""
                    width="45"
                    height="45"
                    loading="lazy"
                    className="avatar"
                    src={author_profile.user_image}
                  />
                ) : (
                  <img
                    alt=""
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
            <div className="topic-meta-data">
              <div className="names trigger-user-card">
                <span className="first full-name">
                  {ansl.user.first_name} {ansl.user.last_name}
                </span>
                <span className="second username">{ansl.user.username}</span>
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
