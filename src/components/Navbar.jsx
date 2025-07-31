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
                        <img src='/logo.png' width='40px' align-content = "center"/>
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

                    <li><Link to="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                        </svg>
                    </Link></li>

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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3"
                                 stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>

                        </Link></li>
                            <li><Link to="/auth/register">Signup</Link></li>
                        </>
                    )}
                </ul>
            </div>

            <hr className="hidden md:block lg:block text-gray-200"/>

            <div className="mx-2 hidden md:block lg:block">
                <ul className="flex px-4 gap-10 catnav py-3.5">
                    <li><Link className="font-[800]" to="/">Tech</Link></li>
                    <li><Link className="font-[800]" to="/cart">Books</Link></li>
                    <li><Link className="font-[800]" to="/">Gadgets</Link></li>
                    <li><Link className="font-[800]" to="/cart">Men</Link></li>
                    <li><Link className="font-[800]" to="/">Ladies</Link></li>
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
