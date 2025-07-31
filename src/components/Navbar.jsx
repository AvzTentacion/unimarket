import React from "react";
import { Link,} from "react-router-dom";
import {ShoppingBagIcon, UserIcon} from "@heroicons/react/16/solid";
import LogoutButton from "./LogoutButton.jsx";
import Search from "./Search.jsx";

const Navbar = () => {

    const isLoggedIn = !!localStorage.getItem("token");


    return (
        <div className="shadow-sm bg-white py-1">
            <div className="my-1 py-1.5 flex justify-between">
                <div className="flex mx-2 px-4 gap-2">

                    <p className="flex">
                        <img src='/logo.png' width='40px'/>
                        <Link
                            className="text-2xl text-[#ce1750] font-black font-[Montserrat]"
                            to="/"
                        >

                            campus-swap
                        </Link>
                    </p>

                </div>
                <Search className="hidden"/>

                <ul className="flex px-4 text-lg gap-3 font-semibold py-1 navitems">

                    <li><Link to="/cart"><ShoppingBagIcon className="size-6 text-[#111]"/></Link></li>

                    {isLoggedIn ? (
                        <>
                            <li><Link to="/profile">
                                <UserIcon className="size-6 text-[#111]"/>
                            </Link></li>
                            <li>
                                <LogoutButton/>
                            </li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/auth/login">
                                <button className="text-white p-1 px-2 rounded-xs text-sm">
                                    Login
                                </button>
                            </Link></li>
                            <li><Link to="/auth/register">Signup</Link></li>
                        </>
                    )}
                </ul>
            </div>

            <hr className="hidden md:block lg:block text-gray-200"/>

            <div className="mx-2 hidden md:block lg:block">
                <ul className="flex px-4 gap-10 catnav py-3.5">
                    <li><Link className="font-[800]" to={`/shop?category=${"Appliances"}`}>Appliances</Link></li>
                    <li><Link className="font-[800]" to={`/shop?category=${"Books"}`}>Books</Link></li>
                    <li><Link className="font-[800]" to={`/shop?category=${"Clothing"}`}>Clothing</Link></li>
                    <li><Link className="font-[800]" to={`/shop?category=${"Electronics"}`}>Electronics</Link></li>
                    <li><Link className="font-[800]" to={`/shop?category=${"Stationary"}`}>Stationary</Link></li>
                    <li><Link className="font-[800]" to={`/shop?category=${"Sports"}`}>Sports</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;


// import React from 'react'
// import {Link} from "react-router-dom";
// import {ShoppingBagIcon} from "@heroicons/react/16/solid/index.js";
//
// const Navbar = () => {
//     return (
//         <div className="shadow-sm bg-white py-1">
//             <div className="my-1 py-1.5 flex justify-between">
//                 <div className="flex mx-2 px-4 gap-2">
//                     <p><Link className="text-2xl text-[#111] font-black text-[#ce1750] font-[Montserrat]" to="/">unistore</Link></p>
//                 </div>
//                 <ul className="flex px-4 text-lg gap-3 font-semibold py-1 navitems">
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/">Search</Link></li>
//                     <li><Link to="/cart"><ShoppingBagIcon className="size-6 text-[#111}"/></Link></li>
//                     <li><Link to="/">Login</Link></li>
//                 </ul>
//             </div>
//             <hr className="hidden md:block lg:block text-gray-200"/>
//             <div className="mx-2 hidden md:block lg:block">
//                 <ul className="flex px-4 gap-10 catnav py-3.5">
//                     <li ><Link className="font-[800]" to="/">Tech</Link></li>
//                     <li ><Link className="font-[800]" to="/cart">Books</Link></li>
//                     <li ><Link className="font-[800]" to="/">Gadgets</Link></li>
//                     <li ><Link className="font-[800]" to="/cart">Men</Link></li>
//                     <li ><Link className="font-[800]" to="/">Ladies</Link></li>
//                 </ul>
//             </div>
//         </div>
//
//     )
// }
// export default Navbar
