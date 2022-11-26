import { useParams } from "react-router-dom";

import { Loader } from "../../components";
import { UseOlymp } from "../../hooks";
import { YearsList } from "../../pages";

export function PartOlympiad() {
  const params = useParams();
  const olymp = UseOlymp(params.id);

  return (
    <div>
      {olymp ? (
        <div>
          <YearsList olympId={params.id} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default PartOlympiad;
