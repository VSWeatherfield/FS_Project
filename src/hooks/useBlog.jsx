import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ajaxService } from '../services/ajaxservice';
import { setBlogsMore } from '../slices/blogs';

export function useBlog(blogId) {
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blogs.blogObj[blogId]);

  useEffect(() => {
    ajaxService(`/blogs/${blogId}/`).then((data) => {
      dispatch(setBlogsMore([data]));
    });
  }, []);

  return blog;
}

export default useBlog;