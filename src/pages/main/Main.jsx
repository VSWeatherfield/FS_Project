import { createContext, createElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Topiclist } from "../../components";
import Forum from "../forum/Forum";

export function Main() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((data) => {
      const parentNode = document.querySelector(".topic-list-body");

      data.forEach((post) => {
        console.log(parentNode, post);

        const node = document.createElement("tr");
        node.classList.add("topic-list-item");
        node.classList.add("category-informatics");
        node.classList.add("unseen-topic");
        node.classList.add("ember-view");

        node.innerHTML = `<td class="main-link clearfix topic-list-data" colSpan="1">
            <span class="link-top-line">
              <a
                href="/{id}"
                role="heading"
                aria-level="2"
                class="title raw-link raw-topic-link"
                data-topic-id="5207"
              >
                ${post.title}
              </a>
            </span>
          </td>
    
          <td
            class="num posts-map posts  topic-list-data"
            title="В этой теме 2 сообщения"
          >
            <span class="number">2</span>
          </td>
    
          <td class="num views  topic-list-data">
            <span class="number" title="Тема просмотрена 37 раз">
              37
            </span>
          </td>
    
          <td class="num topic-list-data age activity">
            <a class="post-activity" href="/t/vkoshp-2020-2021/5207/3">
              <span
                class="relative-date"
                data-time="1666457689608"
                data-format="tiny"
              >
                3ч
              </span>
            </a>
          </td>`;

        parentNode.appendChild(node);
      });
    });
  });
  

  {
    /*
  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const blogs = [];

        data.forEach((blog) => {
          const blogElement = (
            <Link
              className='blog-link'
              to={`blog/${blog.id}`}>

                <section className='roundable'>
                  <h1>{blog.title}</h1>
                  <p>{blog.description}</p>
                </section>
              </Link>
          );
        blogs.push(blogElement);
      });
      setBlogs(blogs);
    });
  }, []);
*/
  }

  return <Forum />;
}

export default Main;
