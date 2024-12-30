import React from "react";

const CategoryCover = ({ img, title, description }) => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[620px] py-44 md:px-16 px-12"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="lg:max-w-4xl mx-auto bg-[#151515] bg-opacity-60 lg:py-20 lg:px-20 md:px-14 md:py-8 px-10 py-6 shadow-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
            {title}
          </h1>
          <p className="text-white text-center leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCover;
