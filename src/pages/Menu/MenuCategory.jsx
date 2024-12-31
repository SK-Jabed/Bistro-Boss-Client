import React from "react";
import MenuItem from "../../components/MenuItem";
import CategoryCover from "../../components/CategoryCover";
import { Link } from "react-router-dom";

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
      <div className="grid md:grid-cols-2 gap-10 w-10/12 mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-12">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-8">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
