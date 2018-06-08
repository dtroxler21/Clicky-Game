import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.img} onClick={() => props.onClick(props.id)}/>
        </div>
    </div>
);

export default Card;