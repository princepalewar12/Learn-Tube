import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Movies",
    "Horror",
    "Funny",
    "Vlog",
    "PUBG",
    "Cricket",
    "Health",
    "Cooking",
    "Netflix",
    "Food",
    "Traveling",
    "React",
    "Interview",
  ];

  return (
    <div className="flex ">
      {list.map((items, index) => (
        <div key={index}>
          <Button name={items} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
