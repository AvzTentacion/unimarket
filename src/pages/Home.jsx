import React from 'react'
import "../index.css"
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import CategoryGrid from "../components/CategoryGrid.jsx";
import TrendingItems from "../components/TrendingItems.jsx";
import RecentListings from "../components/RecentListings.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <TrendingItems/>
            <CategoryGrid/>
            <RecentListings/>
            <HowItWorks/>
            <Footer/>
        </div>
    )
}
export default Home
