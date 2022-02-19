import React from "react";
import "./styles.css"

export const DescribeCard = ({name, tag, img, bg, bgTag, colorTag}) => {
  return (
    <div className="describeCard" style={{backgroundColor: `${bg}`}}>
      <h2 className="title">{name}</h2>
      <div className="abourCard">
        <img className="personImage" src={img} alt="Person"/>
        <p className="tagCard" style={{backgroundColor: `${bgTag}`, color: `${colorTag}`}}>
          {tag}
        </p>
      </div>
    </div>
  )
}