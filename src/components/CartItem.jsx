import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
const CartItem = ({ item }) => {
    const fullStars = Math.floor(item.rating); // Number of full stars
    const hasHalfStar = item.rating % 1 >= 0.5; // Check if there should be a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return <>
        <li className="flex items-center gap-4">
            <img
                src={item.mainImg}
                alt=""
                className="w-30 h-20 rounded object-cover"
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

            <div className="flex flex-1 items-center justify-end gap-2">
                <div className="font-bold mr-2 text-lg">${item.price}</div>
                <form>
                    <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                    <input
                        type="number"
                        min={1}
                        value="1"
                        id="Line1Qty"
                        className="h-8 w-12 rounded border-gray-200 bg-gray-600  p-0 text-center text-xs [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                </form>

                <button className="transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </button>
            </div>
        </li >
    </>
}

export default CartItem