import React from "react";

const FoundersScrollCard = ({ name, imgPath }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center">
      <img src={imgPath} alt={name} className="w-24 h-24 mb-4" />
      <h3 className="text-lg font-bold">{name}</h3>
    </div>
  );
};

export default FoundersScrollCard;
