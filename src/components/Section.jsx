import React from "react";

import "../css/components/_section.css";

const Section = (props) => {
  const { headerTitle, content } = props;

  return (
    <div className="section">
      <h1 className="header_title">{headerTitle}</h1>

      <hr className="header_title_divider" />

      {content.map((element) => {
        return (
          <>
            <h3 className="item_title">{element.section_title}</h3>

            <div
              style={{
                padding: "1.5em",
              }}
            >
              {element.items.map((item) => {
                return (
                  <>
                    <h4>{item.item_title}</h4>

                    {item.item_description.map((description) => {
                      return <p>{description}</p>;
                    })}

                    <ul>
                      {item.item_list.map((listedItem) => {
                        return <li>{listedItem}</li>;
                      })}
                    </ul>
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Section;
