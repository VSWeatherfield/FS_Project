import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ajaxService } from "../services/ajaxservice";
import { setBlogs, setBlogsMore } from "../slices/blogs";

export function UseBlogs() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.blogs.page);

  useEffect(() => {
    ajaxService(`/blogs?page=${page}`).then((data) => {
      if (page === 1) {
        dispatch(setBlogs(data));
      } else {
        dispatch(setBlogsMore(data));
      }
    });
  }, [page]);
}

export default UseBlogs;
