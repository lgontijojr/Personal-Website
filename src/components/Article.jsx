import React from "react";
import "../css/components/_article.css";

const Article = (props) => {
  console.log(props);
  return (
    <article className="article">
      <h1 className="title">{props.headerTitle}</h1>
      <hr className="title_divider" />

      <div>
        {props.content?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div>
                {item.bodyTitle?.map((x, index) => {
                  return (
                    <React.Fragment key={index}>
                      <h3 className="item">{x.title}</h3>
                      <div>
                        <p>{x.description}</p>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
              {item.subTitle?.map((sub, index) => {
                return (
                  <React.Fragment key={index}>
                    <h4>{sub.title}</h4>
                    <p>{sub.description}</p>
                  </React.Fragment>
                );
              })}
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
