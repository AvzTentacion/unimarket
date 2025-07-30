import React from 'react'
import {Link} from "react-router-dom";

const CategoryGrid = () => {
    const categories = [
        { name: "Books", icon: "📚" },
        { name: "Clothing", icon: "👕" },
        { name: "Electronics", icon: "💻" },
        { name: "Furniture", icon: "🪑" },
        { name: "Stationery", icon: "✏️" },
        { name: "Appliances", icon: "🍳" },
        { name: "Sports", icon: "🏀" },
        { name: "Other", icon: "📦" },
    ];

    return (
        <div>
            <section className="py-10 px-6 sm:px-12 lg:px-24 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">🗂️ Browse by Category</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {categories.map((cat) => (
                        <Link
                            to={`/shop?category=${encodeURIComponent(cat.name)}`}
                            key={cat.name}
                            className="flex flex-col items-center justify-center p-8 bg-white rounded-sm shadow hover:shadow-md hover:bg-pink-50 transition"
                        >
                            <span className="text-3xl mb-2">{cat.icon}</span>
                            <span className="text-lg font-medium text-gray-700">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
export default CategoryGrid
