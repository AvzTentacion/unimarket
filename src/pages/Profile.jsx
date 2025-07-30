import React, {useEffect, useState} from 'react'
import Navbar from "../components/Navbar.jsx";
import axios from "axios";


const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token"); // or from context
                const res = await axios.get("https://localhost:7255/api/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(res.data);
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        };

        fetchUser();
    }, []);

    {/*
        if (!user) return <p>Loading...</p>;*/
    }
    return (
        <div>
            <Navbar/>
            {user ? (
                <div className="font-[Montserrat] max-w-3xl mx-auto ">
                    <div className="mx-6 text-sm">
                        <div className="flex mt-12 mb-1">
                            <div className=" flex items-center">
                                <img src="./adidas-yeezy.png"
                                     className="w-12 h-12 sm:w-12 sm:h-12 md:w-25 md:h-25 lg:w-25 lg:h-25 object-cover rounded-full"
                                     alt="profile"
                                />
                            </div>
                            <div className="px-2 my-auto items-center">
                                <p className="font-bold text-xs md:text-[1rem] lg:text-md leading-4">{user.fullName}</p>
                                <p className="font-light text-xs md:text-[.9rem] lg:text-sm">@{user.username}</p>
                                <p className="flex gap-3 text-xs">⭐⭐⭐⭐⭐ <span> 0</span></p>
                            </div>
                        </div>
                        <div className="my-5 items-center">
                            <p className="text-gray-400">Bio: Hello world! </p>
                        </div>
                    </div>
                    <div className="mx-6">
                        <div className="flex mt-4 text-sm gap-6 mb-1">
                            <p>Followers: {user.followersCount}</p>
                            <p>Following: {user.followingCount}</p>
                        </div>
                        <div className="flex mt-8 gap-4 text-sm">
                            <h4>Listings</h4>
                            <h4>Saved</h4>
                            <h4>Reviews</h4>
                        </div>
                        <hr className="text-gray-300 mt-1"/>
                    </div>
                </div>
            ) : (
                <p>Hello World!</p>
            )}
        </div>
    )
            }
            export default Profile
