import React, { useEffect, useState } from 'react';
import { getAllItems } from '../services/Itemapi.js';
import {Link, useSearchParams} from "react-router-dom";
import api from "../services/api.js";
import Navbar from "../components/Navbar.jsx";
import ItemCard from "../components/ItemCard.jsx";

function Shop() {
    const [items, setItems] = useState([]);
    const [searchParams] = useSearchParams();
    const [category, setCategory] = useState("");
    const [condition, setCondition] = useState("");
    const [loading, setLoading] = useState(true);
    const searchQuery = searchParams.get("search") || "";

    useEffect(() => {
        getAllItems()
            .then(res => {
                console.log("Initial fetch:", res.data);
                setItems(Array.isArray(res.data.items) ? res.data.items : []);// ✅ fix here
            })
            .catch(err => console.error('Failed to fetch items:', err));
    }, []);

    const fetchItems = async () => {
        setLoading(true);
        try {
            const res = await api.get(`/items`, {
                params: { searchQuery, category, condition },
            });
            console.log("Filtered fetch:", res.data);
            setItems(Array.isArray(res.data.items) ? res.data.items : []); // ✅ fix here
        } catch (err) {
            console.error("Error fetching items:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const urlCategory = searchParams.get("category") || "";
        setCategory(urlCategory);
    }, [searchParams]);

    useEffect(() => {
        fetchItems();
    }, [searchQuery, category, condition]);

    return(
        <div className="">
            <Navbar />
            <div className="p-4">

                {/* Filters */}
                <div className="mb-6 flex gap-4 flex-wrap">
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="border text-sm/6 p-2 rounded"
                    >
                        <option value="">Category</option>
                        <option value="Books">Books</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Stationary">Stationary</option>
                        <option value="Appliances">Appliances</option>
                        <option value="Sports">Sports</option>
                        <option value="Other">Other</option>
                    </select>

                    <select
                        onChange={(e) => setCondition(e.target.value)}
                        className="border text-sm/6 p-2 rounded"
                    >
                        <option value="">Condition</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                    </select>
                </div>

                {/* Item Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                        {Array.isArray(items) && items.map((item) => (
                            <ItemCard key={item.id} item={item}/>
                        ))}
                    </div>
                ) : items.length === 0 ? (
                    <p>No items found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                        {Array.isArray(items) && items.map((item) => (
                            <ItemCard key={item.id} item={item}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Shop;