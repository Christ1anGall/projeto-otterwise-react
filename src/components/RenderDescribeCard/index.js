import React from "react";
import { DescribeCard } from "../DescribeCard";
import "./styles.css"

// import {toDo, inProgress} from '../../constants/data'
// name, tag, img, bg, bgTag, colorTag
export const RenderDescribeCard = ({data}) => {
  return (
    <>
      <div>
        {data.map((item) => (
        <DescribeCard name={item.name} tag={item.tag} img={item.image}/>
        ))}
      </div>
  </>
  )
}