import React from 'react'
import Slider from "./slider.jsx";
import {Link} from "react-router-dom";


const Hero = () => {
    return (
        <div>
            <section
                className="bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12 px-6 sm:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-10">

                {/* Left Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-4xl font-extrabold text-gray-800 mb-4">
                        Buy & Sell <span className="text-[#ce1750]">Safely</span> on Campus
                    </h4>
                    <p className="text-sm text-[#111] mb-6 max-w-xl">
                        A secure student marketplace to trade textbooks, electronics, furniture, and more – all in
                        person, with verified payments.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <Link
                            to="/shop"
                            className="bg-[#111] hover:bg-[#fff] text-white hover:text-[#111] hover:border  px-6 py-3 rounded-xs text-sm shadow-md"
                        >
                            Browse Items
                        </Link>
                        <Link
                            to="/list-item"
                            className="border border-[#ce1750] text-[#ce1750] hover:bg-pink-200 px-6 py-3 rounded-xs text-sm shadow-sm"
                        >
                            List Your Item
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <img
                        src="/student-exch.jpg" // Replace with your actual image path
                        alt="Students trading items"
                        className="w-full h-auto max-w-md mx-auto drop-shadow-xl"
                    />
                </div>
            </section>
        </div>
    )
}
export default Hero
