import React from "react";
import chefServiceBg from "../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div
      className="relative bg-cover bg-center h-auto py-36 px-8"
      style={{ backgroundImage: `url(${chefServiceBg})` }}
    >
      <div className="lg:max-w-5xl mx-auto bg-white bg-opacity-95 rounded-lg lg:py-14 lg:px-36 md:px-14 md:py-8 px-10 py-6 shadow-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Bistro Boss
        </h1>
        <p className="text-gray-600 text-center leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;