import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Rating = ({ item }) => {
    const fullStars = Math.floor(item.rating); // Number of full stars
    const hasHalfStar = item.rating % 1 >= 0.5; // Check if there should be a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return <>
        <div className="text-sm text-gray-200">
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
    </>
}

export default Rating;