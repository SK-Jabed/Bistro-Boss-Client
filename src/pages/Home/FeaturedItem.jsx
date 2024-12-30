import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import featuredImage from "../../assets/home/featured.jpg"

const FeaturedItem = () => {
    return (
      <div style={{backgroundImage: `url(${featuredImage})`}} className='text-white pt-14 bg-cover bg-center w-full bg-no-repeat bg-fixed my-28 bg-blend-overlay'>
        <SectionTitle heading={"Featured Item"} subHeading={"Check it out"}></SectionTitle>
        <div className="md:flex justify-center items-center pb-20 pt-10 px-36">
          <div>
            <img src={featuredImage} alt="" />
          </div>
          <div className='md:ml-14'>
            <p className="">January 01, 2025</p>
            <p className="uppercase">Where can I get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vel
              ea quia veniam iure, porro tempore, officiis quibusdam dolor
              maxime, officia nisi quasi repellendus! Labore aspernatur
              consequuntur totam delectus dolor aliquid voluptates, laudantium
              molestias nemo repellendus, molestiae esse facere. Laboriosam?
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    );
};

export default FeaturedItem;