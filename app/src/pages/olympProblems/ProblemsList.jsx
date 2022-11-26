import { Link } from "react-router-dom";

import { ProblemDescrForm } from "../../components";
import { Loader } from "../../components";

export function ProblemsList({ olymp, year }) {
  const problemList = year.problem_set;

  if (!problemList) {
    return null;
  }

  return (
    <div className="outerOlympElem">
      <Link
        to={`/olympiads/${olymp.id}`}
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

      <div className="OlympNameHeader">
        <h1 className="olympRealHeader">
          Maтематика → {olymp.title} → {year.title}
        </h1>
      </div>

      <div>
        <h2 className="olymTextDelim">условия задач:</h2>
      </div>
      <div>
        {problemList.map((problem) => (
          <div>
            {problem ? (
              <ProblemDescrForm
                key={problem.id}
                title={problem.title}
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
