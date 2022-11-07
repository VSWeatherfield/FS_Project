import { useParams } from "react-router-dom";

import { Loader } from "../../components";
import { ProblemsList, useProblemYear } from "../../pages";

export function OlympProblems() {
  const params = useParams();
  const { olymp, year } = useProblemYear(params.olympId, params.yearId);

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
