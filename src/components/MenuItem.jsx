import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  
  return (
    <div className="flex space-x-2 items-center justify-center">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[110px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name} ------------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#D99904]">${price}</p>
    </div>
  );
};

export default MenuItem;
