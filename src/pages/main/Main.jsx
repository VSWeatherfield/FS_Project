import { useState } from "react";
import { useSelector } from "react-redux";

import { CreateBlog, EditBlog, Topiclist } from "../../components";
import { Forum, useBlogs } from "../../pages";

export function Main() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const blogs = useSelector((state) => state.blogs.blogs);

  useBlogs();

  return (
    <>
      <CreateBlog
        isCreateModalOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      {editBlog && (
        <EditBlog
          id={editBlog.id}
          isEditModalOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      <Forum
        blogs={blogs.map((blog) => (
          <Topiclist
            key={blog.id}
            id={blog.id}
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
    </>
  );
}

export default Main;
