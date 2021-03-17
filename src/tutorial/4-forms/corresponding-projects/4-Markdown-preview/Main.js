import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import "./styles.css";

const Main = () => {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          //what I type in
          value={markdown}
          //invoke setMarkdown when type in
          onChange={(e) => setMarkdown(e.target.value)}
          className="input"
        ></textarea>

        <article className="result">
          {/*ReactMarkdown Component is from React-markdown */}
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
};

export default Main;
