import React from 'react';
import Banner from './Banner';
import CategorySwiper from './CategorySwiper';
import PopularMenu from './PopularMenu';
import ChefService from './ChefService';
import FeaturedItem from './FeaturedItem';
import Testimonials from './Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
      <div>
        <Helmet>
            <title>Bistro Boss | Home</title>
        </Helmet>
        <Banner></Banner>
        <div className="container w-10/12 mx-auto">
          <CategorySwiper></CategorySwiper>
          <ChefService></ChefService>
          <PopularMenu></PopularMenu>
        </div>
        <FeaturedItem></FeaturedItem>
        <div className="container w-10/12 mx-auto">
          <Testimonials></Testimonials>
        </div>
      </div>
    );
};

export default Home;