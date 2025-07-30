// src/components/TrendingItems.jsx
import ItemCard from "./ItemCard";

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

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {dummyTrendingItems.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default TrendingItems;
