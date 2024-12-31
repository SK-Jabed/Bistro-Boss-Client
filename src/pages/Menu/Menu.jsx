import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Cover';
import menuCover from "../../assets/menu/banner3.jpg";
import dessertCoverImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaCoverImage from "../../assets/menu/pizza-bg.jpg";
import saladCoverImage from "../../assets/menu/salad-bg.jpg";
import soupCoverImage from "../../assets/menu/soup-bg.jpg";
import drinkCoverImage from "../../assets/menu/banner3.jpg";
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
        <div className="mt-20">
          <SectionTitle
            subHeading={"Don't miss"}
            heading={"Today's Offer"}
          ></SectionTitle>
        </div>
        <MenuCategory items={offers}></MenuCategory>
        <MenuCategory
          items={desserts}
          title={"DESSERTS"}
          img={dessertCoverImage}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
        <MenuCategory
          items={pizzas}
          title={"PIZZAS"}
          img={pizzaCoverImage}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
        <MenuCategory
          items={salads}
          title={"SALADS"}
          img={saladCoverImage}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
        <MenuCategory
          items={soups}
          title={"SOUPS"}
          img={soupCoverImage}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
        <MenuCategory
          items={drinks}
          title={"DRINKS"}
          img={drinkCoverImage}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuCategory>
      </div>
    );
};

export default Menu;