import Latex from "react-latex";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ajaxService } from "../../services/ajaxservice";
import { openModal } from "../../slices/modal";

import "./topixlist.css";

const Topiclist = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const blog = useSelector((state) => state.blogs.blogObj[id]);
  const { title, description, views, answers } = blog;

  const handleEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch(openModal({ data: id, name: "edit" }));
  };

  return (
    <tr className="topic-list-item category-informatics unseen-topic ember-view">
      <td className="main-link clearfix topic-list-data" colSpan="1">
        <span className="link-top-line">
          <Link
            to={`/blog/${id}`}
            role="heading"
            aria-level="2"
            className="title raw-link raw-topic-link"
            data-topic-id="5207"
            //onClick={() => {
            //  const views = blog.views + 1;

            //  ajaxService(`/blogs/${id}`, {
            //    method: "PUT",
            //    body: JSON.stringify({ title, description, views, answers }),
            //    headers: {
            //      "Content-Type": "application/json",
            //    },
            //  });
            //}}
          >
            {" "}
            <Latex>{title}</Latex>
          </Link>

          <button className="edit_spec_button" onClick={handleEditClick}>
            ред.
          </button>
        </span>
      </td>

      <td
        className="num posts-map posts  topic-list-data"
        title="В этой теме 2 сообщения"
      >
        <span className="number">{answers}</span>
      </td>

      <td className="num views  topic-list-data">
        <span className="number" title="Тема просмотрена 37 раз">
          {views}
        </span>
      </td>

      <td className="num topic-list-data age activity">
        <a className="post-activity" href="/t/vkoshp-2020-2021/5207/3">
          <span
            className="relative-date"
            data-time="1666457689608"
            data-format="tiny"
          >
            3ч
          </span>
        </a>
      </td>
    </tr>
  );
};

export default Topiclist;
