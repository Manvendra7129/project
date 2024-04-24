import Button from "./Button";
import React from "react";
const list = ["All", "kapil", "music", "fun", "movie"];
const ButtonList = () => {
  return (
    <section className="flex">
      {list.map((listName) => (
        <Button key={listName} name={listName} />
      ))}
    </section>
  );
};

export default ButtonList;
