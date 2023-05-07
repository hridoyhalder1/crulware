import React from 'react';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import MarketPlaceProduct from './MarketPlaceProduct/MarketPlaceProduct';
import Accounts from './Accounts/Accounts';
import PopularSection from './PopularSection/PopularSection';
import BundleProducts from './BundleProducts/BundleProducts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Nav/>
            <PopularSection/>
            <BundleProducts/>
            <Accounts/>
            <MarketPlaceProduct/>
        </div>
    );
};

export default Home;