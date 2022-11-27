import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ajaxService } from "../services/ajaxservice";
import { setMyBlogs, setMyBlogsMore } from "../slices/blogs";

export function UseMyBlogs() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.blogs.page);

  useEffect(() => {
    ajaxService(`/myblogs/?page=${page}`).then((data) => {
      if (page === 1) {
        dispatch(setMyBlogs(data.results));
      } else {
        dispatch(setMyBlogsMore(data.results));
      }
    });
  }, [page]);
}

export default UseMyBlogs;
