// src/components/RecentListings.jsx
import ItemCard from "./ItemCard";

const recentItems = [
    {
        id: 101,
        title: "Wireless Headphones",
        category: "Electronics",
        price: 550,
        imageUrl: "/images/items/headphones.jpg",
    },
    {
        id: 102,
        title: "Second-Year Law Textbooks",
        category: "Books",
        price: 200,
        imageUrl: "/images/items/law-books.jpg",
    },
    {
        id: 103,
        title: "Study Desk",
        category: "Furniture",
        price: 650,
        imageUrl: "/images/items/study-desk.jpg",
    },
    {
        id: 104,
        title: "Microwave Oven",
        category: "Appliances",
        price: 900,
        imageUrl: "/images/items/microwave.jpg",
    },
];

const RecentListings = () => {
    return (
        <section className="py-10 px-6 sm:px-12 lg:px-24 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">🆕 Recently Listed</h2>
                <a
                    href="/shop?sort=latest"
                    className="text-blue-600 hover:underline text-sm font-medium"
                >
                    View All ➤
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                {recentItems.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default RecentListings;
