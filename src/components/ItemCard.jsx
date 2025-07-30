import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <Link
            to={`/items/${item.id}`}
            className="bg-white p-4 rounded-sm shadow hover:shadow-lg transition duration-900"
        >
            <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 truncate">{item.category}</p>
            <p className="text-lg font-bold text-[#ce1750] mt-1">R{item.price}</p>
        </Link>
    );
};

export default ItemCard;