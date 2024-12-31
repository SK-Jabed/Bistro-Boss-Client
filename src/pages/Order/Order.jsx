import React from 'react';
import orderNowCoverImg from "../../assets/shop/banner2.jpg"
import Cover from '../../components/Cover';
import CategoryTabs from './CategoryTabs';

const Order = () => {
    return (
        <div>
            <Cover img={orderNowCoverImg} title={"Order Now"}></Cover>
            <div className='container w-10/12 mx-auto'>

            <CategoryTabs></CategoryTabs>
            </div>
        </div>
    );
};

export default Order;