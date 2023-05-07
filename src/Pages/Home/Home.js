import React from 'react';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import MarketPlaceProduct from './MarketPlaceProduct/MarketPlaceProduct';
import Accounts from './Accounts/Accounts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Nav/>
            <Accounts/>
            <MarketPlaceProduct/>
        </div>
    );
};

export default Home;