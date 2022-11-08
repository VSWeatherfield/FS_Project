import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ProblemDescrForm } from "../../components";
import { Loader } from "../../components";

export function ProblemsList({ olympId, yearId }) {
  const problemList = useSelector(
    (state) => state.olymps.years[Number(yearId)].problems
  );

  const olympName = useSelector(
    (state) => state.olymps.olympObjs[olympId].name
  );

  const yearName = useSelector((state) => state.olymps.years[yearId].name);

  if (!problemList || problemList.length === 0) {
    return null;
  }

  return (
    <div className="outerOlympElem">
      <Link to={`/olympiads/${olympId}`}>
        <a className="flex w-min items-center text-blue-500 text-sm mb-6">
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

      <div className="OlympNameHeader">
        <h1 className="olympRealHeader">
          {" "}
          Maтематика → {olympName} → {yearName}{" "}
        </h1>
      </div>

      <div>
        <h2 className="olymTextDelim">условия задач:</h2>
      </div>
      <div>
        {problemList.map((problem) => (
          //<ProblemDescrForm key={problem.id} problemId={problem.id} problemDescr={problem.description} />
          <div>
            {problem ? (
              <ProblemDescrForm
                key={problem.id}
                title={problem.id.toString()}
                description={problem.description}
              />
            ) : (
              <Loader />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProblemsList;
