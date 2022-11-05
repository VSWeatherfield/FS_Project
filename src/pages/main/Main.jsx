import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CreateBlog, EditBlog, Topiclist } from "../../components";
import { Forum, useBlogs } from "../../pages";
import { increasePage } from "../../slices/blogs";

export function Main() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();

  useBlogs();

  return (
    <>
      <CreateBlog
        isCreateModalOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      {editBlog && (
        <EditBlog
          isEditModalOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          exviews={editBlog.views}
          exanswers={editBlog.answers}
          blogId={editBlog.id}
          defaultTitle={editBlog.title}
          defaultDescription={editBlog.description}
        />
      )}

      <Forum
        blogs={blogs.map((blog) => (
          <Topiclist
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            views={blog.views}
            answers={blog.answers}
            openopen={() => {
              setIsCreateModalOpen(false);
              setIsEditModalOpen(true);
              setEditBlog(blog);
            }}
          />
        ))}
        openopen={() => {
          setIsEditModalOpen(false);
          setIsCreateModalOpen(true);
        }}
      />

      <div className="more-topics">
        <button
          className="btn btn-default pull-right"
          onClick={() => dispatch(increasePage())}
        >
          Больше
        </button>
      </div>
    </>
  );
}

export default Main;
