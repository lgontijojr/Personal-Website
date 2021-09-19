import React from "react";
import "../css/components/_article.css";

const Article = (props) => {
  const { headerTitle, content } = props;

  return (
    <article className="article">
      <h1 className="header_title">{headerTitle}</h1>
      <hr className="header_title_divider" />
      {content.map((i) => {
        return (
          <React.Fragment>
            <h3 className="item_title">{i.section_title}</h3>
            <div>
              {i.items.map((item) => {
                return (
                  <React.Fragment>
                    <h4>{item.item_title}</h4>

                    {item.item_description?.map((description) => {
                      return <p>{description}</p>;
                    })}

                    <ul>
                      {item.item_list?.map((listedItem, index) => {
                        return <li key={index}>{listedItem}</li>;
                      })}
                    </ul>
                  </React.Fragment>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </article>
  );
};

export default Article;
