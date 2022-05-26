import React, { useState } from "react";
import Card from "./Card";
import './Section.css'

export default function Section({ heading, data,search }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="Section" style={{ paddingBottom: expand ? "30px" : "5px" }}>
      <div className="Heading" onClick={() => setExpand(!expand)}>
        <h5>{heading} </h5>
        {expand && (
          <i
            className="fa-solid fa-angle-up"
            onClick={() => setExpand(false)}
          ></i>
        )}
        {!expand && (
          <i
            className="fa-solid fa-angle-down"
            onClick={() => setExpand(true)}
          ></i>
        )}
      </div>
      {expand && (
        <div className="row">
          {data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map((item) => (
            <Card
              key={item.id}
              id={item.id}
              heading={heading}
              description={item.description}
              price={item.price}
              title={item.title}
              checked={item.checked}
            />
          ))}
        </div>
      )}
    </div>
  );
}
