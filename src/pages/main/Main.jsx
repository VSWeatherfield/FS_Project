import { useEffect, useState } from "react";

import { ajaxService } from "../../services/ajaxservice";
import { EditBlog, Topiclist } from "../../components";
import { BlogCreate } from "../../containers";
import { Forum } from "../../pages";

export function Main() {
  const [blogs, setBlogs] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);

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

      <EditBlog
        isEditModalOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        blogId={editBlogId}
      />
      <Forum
        blogs={blogs.map((blog) => (
          <Topiclist
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            views={blog.views}
            answers={blog.answers}
            openopen={({ blogId }) => {
              setIsCreateModalOpen(false);
              setIsEditModalOpen(true);
              setEditBlogId(blogId);
            }}
          />
        ))}
        openopen={
          () => {
            setIsEditModalOpen(false);
            setIsCreateModalOpen(true);
          }
        }
      />
    </div>
  );
}

export default Main;
