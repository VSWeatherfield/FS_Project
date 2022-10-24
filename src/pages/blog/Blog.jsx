import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Blog() {
  const params = useParams();

  return (
    <aside className="main-aside">
      <h1>
        aoaooaoa <br></br>
        aoaooaoa <br></br>
        aoaooaoa <br></br>
        aoaooaoa <br></br>
        aoaooaoa <br></br>
        aoaooaoa <br></br>
        aoaooaoa <br></br>
        aoaooaoa <br></br>
        aoaooaoa <br></br>
        {params.id}
      </h1>
    </aside>
  );
}

export default Blog;
