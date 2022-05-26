import React from "react";
import { useDispatch } from "react-redux";
import './Card.css'

export default function Card({heading,id,description,price,title,checked}) {
    const dispatch = useDispatch();

    const handleChange = (e) => {
       if(heading === 'Sales'){
           console.log()
        dispatch({type:'SALES_UPDATE_ITEM',payload:{id,checked:e.target.checked}})
       }
       if(heading === 'Tech Team'){
        dispatch({type:'TECH_UPDATE_ITEM',payload:{id,checked:e.target.checked}})
       }
       if(heading === 'Marketing'){
        dispatch({type:'MARKETING_UPDATE_ITEM',payload:{id,checked:e.target.checked}})
       }
    }

  return (
    <div className="col-lg-4 col-md-2 Card">
    <div className="Card-Heading">
      <p>{title.slice(0,22)}...</p>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={checked}/>
        <span className="slider round"></span>
      </label>
    </div>
    <div className="Price">
      <i className="fa-solid fa-indian-rupee-sign"></i>
      <span>{price}</span>
    </div>
    <div className="Card-Bottom">
      <div className="SName">
        <div className="ShortName pink">MS</div>
        <div className="ShortName blue">RJ</div>{" "}
        <div className="ShortName yellow">PT</div>
      </div>
      <span>+12 More</span>
      <i className="fa-solid fa-link"></i>
    </div>
  </div>
  );
}
