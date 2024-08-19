import { AiFillDelete } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const CartItem = ({ item, removeItem }) => {
    const fullStars = Math.floor(item.rating); // Number of full stars
    const hasHalfStar = item.rating % 1 >= 0.5; // Check if there should be a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return <>
        <li className="flex items-center gap-4">
            <img
                src={item.mainImg}
                alt=""
                className="w-14 sm:w-32 sm:h-20 rounded object-cover"
            />

            <div>
                <h3 className="text-base font-semibold">{item.title}</h3>

                <div className="mt-0.5 text-sm text-gray-200">
                    <div className="">By: {item.instructor}</div>
                    <div className="flex items-center">
                        {item.rating}
                        {Array(fullStars).fill().map((_, index) => (
                            <FaStar key={index} className="ml-2 text-yellow-500" />
                        ))}

                        {hasHalfStar && <FaStarHalfAlt className="ml-2 text-yellow-500" />}

                        {Array(emptyStars).fill().map((_, index) => (
                            <FaRegStar key={index} className="ml-2 text-yellow-500" />
                        ))}
                    </div>
                    <div className="flex">{item.duration} Total Hours
                        <span className="ml-4 flex items-center"> <GoDotFill className="mr-1" /> All levels</span>
                    </div>
                </div>

            </div >

            <div className="flex flex-1 items-center justify-end flex-col sm:flex-row gap-2">
                <div className="font-bold sm:mr-2 sm:text-lg">${item.price}</div>
                <div className="space-x-2">
                    <button className="transition hover:text-red-600">
                        <FaRegHeart className="sm:text-xl" />
                    </button>

                    <button className="transition hover:text-red-600" onClick={() => removeItem(item.id)}>
                        <AiFillDelete className="sm:text-xl" />
                    </button>
                </div>
            </div>
        </li >
    </>
}

export default CartItem