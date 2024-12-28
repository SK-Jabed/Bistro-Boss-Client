import React from 'react';
import Banner from './Banner';
import CategorySwiper from './CategorySwiper';
import PopularMenu from './PopularMenu';
import ChefService from './ChefService';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className='container w-10/12 mx-auto'>
           <CategorySwiper></CategorySwiper>
           <ChefService></ChefService>
            <PopularMenu></PopularMenu>
           </div>
        </div>
    );
};

export default Home;