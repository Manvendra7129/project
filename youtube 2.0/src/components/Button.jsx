import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" m-2 px-3  rounded-lg bg-gray-700">{name}</button>
    </div>
  );
};

export default Button;
