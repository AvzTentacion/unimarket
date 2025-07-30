import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import api from "../services/api.js";

const Search = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim() !== "") {
            navigate(`/shop?search=${encodeURIComponent(search.trim())}`);
            setSearch("");
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (search.length > 1) {
                api.get(`/items/suggest?query=${search}`).then((res) => {
                    setSuggestions(res.data);
                });
            } else {
                setSuggestions([]);
            }
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [search]);

    return (
        <div>
            <form onSubmit={handleSearch} className="ml-6 hidden md:block lg:block">
                <input
                    id="two"
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1 text-sm w-60 focus:outline-none focus:ring-2 focus:ring-[#ce1750]"
                />
                {suggestions.length > 0 && (
                    <ul className="absolute bg-white shadow rounded w-full z-10">
                        {suggestions.map((item) => (
                            <li key={item.id}>
                                <Link to={`/product/${item.id}`} className="block px-4 py-2 hover:bg-gray-100">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

            </form>
        </div>
    )
}
export default Search
