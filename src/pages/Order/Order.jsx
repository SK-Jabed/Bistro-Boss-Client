import React from 'react';
import orderNowCoverImg from "../../assets/shop/banner2.jpg"
import Cover from '../../components/Cover';

const Order = () => {
    return (
        <div>
            <Cover img={orderNowCoverImg} title={"Order Now"}></Cover>
        </div>
    );
};

export default Order;