import React from 'react'
import {ShoppingBagIcon, TrashIcon} from "@heroicons/react/16/solid/index.js";

const CartCard = ({item: {description, condition, name,price}}) => {
    return (
        <div className="px-6 py-5 mx-4 my-8 font-[Montserrat] bg-white rounded-xl shadow-2xl">
            <div>
                <div className="flex mb-1">
                    <div className=" flex items-center">
                        <img src="/pexels.jpg" //{picture}
                             className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-10 lg:h-10 object-cover rounded-full"
                             alt="profile"
                        />
                    </div>
                    <div className="px-2 py-2 items-center">
                        <p className="font-bold text-sm md:text-md lg:text-md leading-4">seller_name</p>
                        <p className="font-light text-sm md:text-md lg:text-sm">username</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-between">
                <div className="flex mb-4 md:3/2 lg:w-2/3">
                    <img
                        src="./blue-low-nike.png" //{product_image}
                        className="w-40 h-30 sm:w-30 sm:h-30 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover rounded-md"
                        alt="product"
                    />
                    <div className="mx-8">
                        <p className="bg-blue-200 mb-1 flex text-[#111] gap-1 px-2 w-40 md:w-38 lg:w-43 text-[.8rem] md:text-xs lg:text-sm rounded-xl p-1">
                            <ShoppingBagIcon className="size-4.5 text-blue-800"/>
                            In 5 people's bags
                        </p>
                        <p className="text-[.9rem] md:text-[1rem] font-semibold text-clip lg:text-[.95rem]">{name}</p>
                        <p className="text-[.7rem] md:text-[1rem] overflow-hidden lg:text-[.85rem]">{description}</p>
                        <p className="text-[.6rem] md:text-[1rem] text-gray-400 text-clip  lg:text-[.75rem]">Condition • {condition}</p>
                        <p className="font-[700] text-[.95rem] mt-8">{price}</p>
                        <TrashIcon className="size-5.5 mt-4 light text-dark-100"/>
                    </div>
                </div>
                <div className="w-full md:2/3 lg:w-2/6">
                <div className="flex font-[Montserrat] text-sm w-full justify-between py-1.5">
                        <p>Item(s)</p>
                        <p>{price}</p>
                    </div>

                    <hr className="text-gray-300"/>
                    <div className="flex font-[Montserrat] text-sm w-full justify-between py-1.5">
                        <p>Sales tax</p>
                        <p>sales_tax</p>
                    </div>

                    <hr className="text-gray-300"/>
                    <div className="flex w-full justify-between py-2.5">
                        <p className="text-sm font-[Montserrat] font-[300]">Shipping calculated at checkout</p>
                    </div>
                    <div className="flex w-full justify-between py-2.5">
                        <p className="font-[700] font-[Montserrat]">Total</p>
                        <p className="font-bold">total</p>
                    </div>

                        <button className="text-gray-100 w-full font-[800] p-2 px-14 text-[0.9rem]">Checkout 1 item</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
    )
}
export default CartCard
