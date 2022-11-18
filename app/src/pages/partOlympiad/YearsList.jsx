import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YearBoxForm } from "../../components";

export function YearsList({ olympId }) {
  const yearList = useSelector(
    (state) => state.olymps.olympObjs?.[olympId].years
  );

  const olympName = useSelector(
    (state) => state.olymps.olympObjs[olympId].name
  );

  if (!yearList || yearList.length === 0) {
    return null;
  }

  return (
    <div className="outerOlympElem">
      <Link to="/olympiads/">
        <a
          className="flex w-min items-center text-blue-500 text-sm mb-6"
          href="/"
        >
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 12H6M12 5l-7 7 7 7"></path>
          </svg>
          <span>Назад</span>
        </a>
      </Link>
      <div className="olympHeader">
        <div>
          <h1 className="olympRealHeader"> Maтематика → {olympName} </h1>
        </div>
      </div>
      <div>
        <h2 className="olymTextDelim">года:</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {yearList.map((year) => (
          <YearBoxForm key={year} yearId={year} olympId={olympId} />
        ))}
      </div>
    </div>
  );
}

export default YearsList;
