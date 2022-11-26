import { useParams } from "react-router-dom";

import { UseProblemYear } from "../../hooks";
import { Loader } from "../../components";
import { ProblemsList } from "../../pages";

export function OlympProblems() {
  const params = useParams();
  const { olymp } = UseProblemYear(params.olympId, params.yearId);
  const year = olymp.year_set.find((x) => x.id === Number(params.yearId));

  return (
    <div>
      {olymp && year ? (
        <div>
          <ProblemsList olymp={olymp} year={year} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default OlympProblems;
