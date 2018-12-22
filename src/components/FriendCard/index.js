import React from "react";
import "./style.css";
//<img alt={props.name} src={props.image} />
function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.shuffling(props.id)}>
      <div className="img-container">
      <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
          {props.name}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default FriendCard;
