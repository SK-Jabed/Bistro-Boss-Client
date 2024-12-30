import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Cover';
import menuCover from "../../assets/menu/banner3.jpg";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuCover} title={"Our Menu"}></Cover>

        </div>
    );
};

export default Menu;