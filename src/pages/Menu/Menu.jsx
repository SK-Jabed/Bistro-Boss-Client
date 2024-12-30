import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Cover';
import menuCover from "../../assets/menu/banner3.jpg";
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offers = menu.filter((item) => item.category === "offered");
    const desserts = menu.filter(item => item.category === "dessert");
    const salads = menu.filter((item) => item.category === "salad");
    const pizzas = menu.filter((item) => item.category === "pizza");
    const soups = menu.filter((item) => item.category === "soup");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuCover} title={"Our Menu"}></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offers}></MenuCategory>
        </div>
    );
};

export default Menu;