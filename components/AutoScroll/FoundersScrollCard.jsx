import React from "react";

const FoundersScrollCard = ({ name, imgPath }) => {
  return (
    <div className="p-4 bg-transparent flex flex-col items-center">
      <img src={imgPath} alt={name} className=" w-44 h-24 mb-4" />
      <h3 className="subtitle">{name}</h3>
    </div>
  );
};

export default FoundersScrollCard;
