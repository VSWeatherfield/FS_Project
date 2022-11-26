import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./yearBoxForm.css";

const YearBoxForm = ({ olympId, year }) => {
  if (!year) {
    return null;
  }

  return (
    <Link
      className="flex items-center p-4 rounded bg-gray-100 dark:bg-black border border-transparent dark:border-gray-700 transition-transform transform active:scale-95"
      to={`/olympiads/${olympId}/year/${year.id}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="flex-none mr-2"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
        {year.title}
      </span>
    </Link>
  );
};

export default YearBoxForm;
