import React from 'react';
import Banner from './Banner';
import CategorySwiper from './CategorySwiper';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className='container w-10/12 mx-auto'>

           <CategorySwiper></CategorySwiper>
           </div>
        </div>
    );
};

export default Home;