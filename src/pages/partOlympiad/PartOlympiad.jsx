import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ajaxService } from "../../services/ajaxservice";
import { BoxForm, Loader } from "../../components";

export function PartOlympiad() {
  const params = useParams();
  const [olympiad, setOlympiad] = useState([]);

  useEffect(() => {
    ajaxService(`/blogs/${params.olympId}`).then((data) => {
      setOlympiad(data);
    });
  }, []);

  return (
    <div> {/*
      {olympiad ? (
        {olympiad.map((ol) => (
          <BoxForm
            key={ol.id}
            id={ol.id}
            name={ol.name}
          />
        ))}
        ) : ( */}
        <Loader />
      {/*)}  */}
    </div>
  );
}

export default PartOlympiad;
