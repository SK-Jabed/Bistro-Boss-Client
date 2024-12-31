import React from "react";
import orderNowCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../../components/Cover";
import CategoryTabs from "./CategoryTabs";
import { Helmet } from "react-helmet-async";

const Order = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderNowCoverImg} title={"Order Now"}></Cover>
      <div className="container w-10/12 mx-auto">
        <CategoryTabs></CategoryTabs>
      </div>
    </div>
  );
};

export default Order;
