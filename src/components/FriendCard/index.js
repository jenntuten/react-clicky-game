import React from "react";
import "./style.css";

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
/*<span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>*/
export default FriendCard;
