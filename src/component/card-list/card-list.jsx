import React from "react";
import "./card-list.css";
import { Card } from "../card/car";

const CardList = (props) => {
  return (
    <div className="Card-List">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
export default CardList;
