import React from 'react';
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
    return (
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={img}
        bgImageAlt="The Menu Cover Image"
        strength={200}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-7xl mx-auto bg-[#151515] bg-opacity-60 lg:pt-24 lg:pb-28 lg:px-80 md:px-14 md:py-8 px-10 py-6 shadow-lg">
              <h1 className="mb-2 text-6xl font-semibold uppercase">{title}</h1>
              <p className="mb-5">Would you like to try a dish?</p>
            </div>
          </div>
        </div>
      </Parallax>
    );
};

export default Cover;