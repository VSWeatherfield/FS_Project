import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import VSImage from "../../../images/VSWeatherfield.png";

import "./userItem.css";

const UserItem = (props) => {
  const { id } = props;

  const blog = useSelector((state) => state.blogs.blogObj[id]);
  const { title, topic, description } = blog;

  return (
    <li id="ember662" className="user-stream-item item">
      <div className="user-stream-item__header info">
        <div className="avatar-link">
          <div className="avatar-wrapper">
            <img
              src={VSImage}
              loading="lazy"
              width="45"
              height="45"
              className="avatar actor"
            />
          </div>
        </div>

        <div className="user-stream-item__details">
          <div className="stream-topic-title">
            <span className="title">
              <Link to="/blog/29">{title}</Link>
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
        {description}
      </p>
    </li>
  );
};

export default UserItem;
