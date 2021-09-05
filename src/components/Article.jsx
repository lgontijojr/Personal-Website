import React from "react";
import "../css/components/_article.css";

const Article = (props) => {
  return (
    <article className="article">
      <h1>{props.title}</h1>
      <hr className="title_divider" />

      <div>
        {props.content.map((item) => {
          return (
            <React.Fragment>
              <h4>{item.subTitle}</h4>
              <p>{item.paragraph}</p>
            </React.Fragment>
          );
        })}
      </div>
    </article>
  );
};

export default Article;
