import Latex from "react-latex";
import { Link } from "react-router-dom";

import "./problemDescrForm.css";

const ProblemDescrForm = (props) => {
  const { title, description } = props;
  const noTitle = "Problem " + title;

  return (
    <div className="wrap">
      <h2>
        <Latex>{noTitle}</Latex>
      </h2>

      <article className="content prose-sm sm:prose dark:prose-dark sm:dark:prose-dark max-w-full md:max-w-full">
        <p>
          <Latex>{description}</Latex>
        </p>
      </article>
    </div>
  );
};

export default ProblemDescrForm;
