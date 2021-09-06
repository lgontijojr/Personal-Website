import React from "react";
import "../css/components/_article.css";

const Article = (props) => {
  return (
    <article className="article">
      <h1 className="title">{props.title}</h1>
      <hr className="title_divider" />

      <div>
        {props.content.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div>
                <h4>{item.subTitle}</h4>
                <p>{item.paragraph}</p>
              </div>
              <ul>
                {item.list?.map((listedItem, index) => {
                  return <li key={index}>{listedItem}</li>;
                })}
              </ul>
            </React.Fragment>
          );
        })}
      </div>
    </article>
  );
};

export default Article;
