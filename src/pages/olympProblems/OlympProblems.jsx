import { useParams } from "react-router-dom";

import { UseProblemYear } from "../../hooks";
import { Loader } from "../../components";
import { ProblemsList } from "../../pages";

export function OlympProblems() {
  const params = useParams();
  const { olymp, year } = UseProblemYear(params.olympId, params.yearId);

  return (
    <div>
      {olymp && year ? (
        <div>
          <ProblemsList olympId={olymp.id} yearId={year.id} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default OlympProblems;
