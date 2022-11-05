import { useState } from "react";

import { CreateBlog, EditBlog, Topiclist } from "../../components";
import { Forum, useBlogs } from "../../pages";

export function Main() {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState(null);

  const { page, setPage, blogs } = useBlogs();

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

        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default Main;
