import React from "react";
import FoodCard from "../../components/FoodCard";

const FoodTabPanel = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodTabPanel;
