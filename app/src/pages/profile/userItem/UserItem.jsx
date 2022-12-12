import Latex from "react-latex";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import defaultUser from "../../../images/default-user.jpg";

import "./userItem.css";

const UserItem = (props) => {
  const { id, profile } = props;

  const blog = useSelector((state) => state.blogs.blogObj[id]);
  const { title, topic, description } = blog;

  return (
    <li id="ember662" className="user-stream-item item">
      <div className="user-stream-item__header info">
        <div className="avatar-link">
          <div className="avatar-wrapper">
            {profile ? (
              <img
                alt=""
                src={profile.user_image}
                loading="lazy"
                width="45"
                height="45"
                className="avatar actor"
              />
            ) : (
              <img
                alt=""
                src={defaultUser}
                loading="lazy"
                width="45"
                height="45"
                className="avatar actor"
              />
            )}
          </div>
        </div>

        <div className="user-stream-item__details">
          <div className="stream-topic-title">
            <span className="title">
              <Link to={`/blog/${id}`}>{title}</Link>
            </span>
          </div>

          <div className="category">
            <div className="badge-wrapper bullet">
              <span className="badge-category-bg"></span>

              <span
                data-drop-close="true"
                className="badge-category clear-badge"
              >
                <span className="category-name">{topic}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <p data-topic-id="4125" data-user-id="643" className="excerpt">
        <Latex>{description}</Latex>
      </p>
    </li>
  );
};

export default UserItem;
