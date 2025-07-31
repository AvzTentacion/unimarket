import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <Link
            to={`/product/${item.id}`}
            className="bg-white p-0 rounded-sm shadow hover:shadow-lg transition duration-300"
        >
            <img
                src={'/adidas-yeezy.png' || item.images?.[0] }
                alt={item.name}
                className="w-full h-50 object-cover rounded-sm mb-3"
            />
            <div className={'px-4 py-2'}>
                <h3 className="text-md font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600 truncate capitalize">
                    Condition: {item.condition}
                </p>
                <p className="text-lg font-bold text-[#ce1750] mt-1">R{item.price}</p>
            </div>

        </Link>
    );
};

export default ItemCard;