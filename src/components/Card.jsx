import React from "react";

function Card(props){
    return(
        <div className="card">
        <img src={props.img} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p className="price">${props.price}</p>
      </div>
    );
}
export default Card;