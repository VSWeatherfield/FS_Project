import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { YearBoxForm } from "../../components";
import { UseOlymp } from "../../hooks";

export function YearsList({ olympId }) {
  const olymp = UseOlymp(olympId);

  if (!olymp.year_set) {
    return null;
  }

  return (
    <div className="outerOlympElem">
      <Link
        to="/olympiads/"
        className="flex w-min items-center text-blue-500 text-sm mb-6"
      >
        <svg
          className="mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H6M12 5l-7 7 7 7"></path>
        </svg>
        <span>Назад</span>
      </Link>
      <div className="olympHeader">
        <div>
          <h1 className="olympRealHeader"> Maтематика → {olymp.title} </h1>
        </div>
      </div>
      <div>
        <h2 className="olymTextDelim">года:</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {olymp.year_set.map((year) => (
          <YearBoxForm key={year.id} year={year} olympId={year.olymp} />
        ))}
      </div>
    </div>
  );
}

export default YearsList;
