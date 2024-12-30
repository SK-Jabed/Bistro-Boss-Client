import React from "react";
import MenuItem from "../../components/MenuItem";
import CategoryCover from "../../components/CategoryCover";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div>
      {title && (
        <CategoryCover
          img={img}
          title={title}
          description={description}
        ></CategoryCover>
      )}
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
