import { useEffect, useState } from "react";

import { ajaxService } from "../../services/ajaxservice";
import { EditBlog, Topiclist } from "../../components";
import { BlogCreate } from "../../containers";
import { Forum } from "../../pages";

export function Main() {
  const [blogs, setBlogs] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState(null);

  useEffect(() => {
    ajaxService("/blogs").then((data) => {
      setBlogs(data);
    });
  });

  return (
    <div>
      <BlogCreate
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
    </div>
  );
}

export default Main;
