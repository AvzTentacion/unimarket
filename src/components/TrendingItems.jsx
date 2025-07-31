// src/components/TrendingItems.jsx
import ItemCard from "./ItemCard";
import {useEffect, useState} from "react";
import axios from "axios";

const dummyTrendingItems = [
    {
        id: 1,
        title: "MacBook Pro 13” (M1)",
        category: "Electronics",
        price: 12500,
        imageUrl: "/images/items/macbook.jpg",
    },
    {
        id: 2,
        title: "Used Accounting Textbook",
        category: "Books",
        price: 350,
        imageUrl: "/images/items/accounting-book.jpg",
    },
    {
        id: 3,
        title: "Mini Fridge – Like New",
        category: "Appliances",
        price: 800,
        imageUrl: "/images/items/fridge.jpg",
    },
    {
        id: 4,
        title: "Office Chair",
        category: "Furniture",
        price: 450,
        imageUrl: "/images/items/chair.jpg",
    },
];


const TrendingItems = () => {
    // const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     axios.get("https://localhost:7255/items/trending?count=6")
    //         .then(res => {
    //             setItems(res.data);
    //             setLoading(false);
    //         })
    //         .catch(err => {
    //             console.error("Failed to fetch trending items:", err);
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) return <p>Loading trending items...</p>;
    // if (items.length === 0) return <p>No trending items found.</p>;
    return (
        <section className="py-10 px-6 sm:px-12 lg:px-24 font-[Montserrat] bg-white">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">🔥 Trending Items</h2>
                <a
                    href="/shop"
                    className="text-[#ce1750] hover:underline text-sm font-medium"
                >
                    View All ➤
                </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                {dummyTrendingItems.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default TrendingItems;
