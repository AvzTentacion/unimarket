import React, {useEffect, useState} from 'react'
import "../App.css"
import "../index.css"
import Navbar from "../components/Navbar.jsx";
import CartCard from "../components/CartCard.jsx";
import {getAllItems} from "../services/Itemapi.js";


const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems()
            .then(res => setItems(res.data))
            .catch(err => console.error('Failed to fetch items:', err));
    }, []);
    return (
        <div>
            <Navbar/>
            <div className="max-w-6xl mx-auto">
                <h3 className="mt-10 mx-6 md:mx-6 lg:mx-6 font-bold text-3xl">Bag</h3>
                <div>
                    {Array.isArray(items) ? items.map(item => (
                        <CartCard key={item.id} item={item}/>
                    )):[]}
                </div>

            </div>
        </div>
    )
}
export default Cart
