import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="p-2">
            <img src={image} className="rounded-xl" />
          </figure>
          <p className="absolute right-0 bg-[#111827] text-white py-1 px-3 mr-5 mt-5">
            ${price}
          </p>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>

            <div className="card-actions">
              <button className="btn border-0 border-b-4 uppercase border-[#BB8506] hover:bg-[#111827] hover:border-[#BB8506] hover:text-[#BB8506] font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;