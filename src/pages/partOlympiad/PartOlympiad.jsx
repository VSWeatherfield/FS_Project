import { useParams } from "react-router-dom";

import { Loader } from "../../components";
import { YearsList, useOlymp } from "../../pages";

export function PartOlympiad() {
  const params = useParams();

  const olymp = useOlymp(params.id);

  return (
    <div>
      {olymp ? (
        <div>
          <YearsList olympId={olymp.id} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default PartOlympiad;
