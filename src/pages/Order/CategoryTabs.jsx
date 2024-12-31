import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from '../../hooks/useMenu';
import FoodTabPanel from './FoodTabPanel';

const CategoryTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);
        const [menu] = useMenu();
        const desserts = menu.filter((item) => item.category === "dessert");
        const salads = menu.filter((item) => item.category === "salad");
        const pizzas = menu.filter((item) => item.category === "pizza");
        const soups = menu.filter((item) => item.category === "soup");
        const drinks = menu.filter((item) => item.category === "drinks");

    return (
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Desserts</Tab>
            <Tab>Pizza</Tab>
            <Tab>Salad</Tab>
            <Tab>Soups</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <FoodTabPanel items={desserts}></FoodTabPanel>
          </TabPanel>
          <TabPanel><FoodTabPanel items={pizzas}></FoodTabPanel></TabPanel>
          <TabPanel><FoodTabPanel items={salads}></FoodTabPanel></TabPanel>
          <TabPanel><FoodTabPanel items={soups}></FoodTabPanel></TabPanel>
          <TabPanel><FoodTabPanel items={drinks}></FoodTabPanel></TabPanel>
        </Tabs>
      </div>
    );
};

export default CategoryTabs;