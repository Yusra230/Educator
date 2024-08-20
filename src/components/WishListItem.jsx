import { AiFillDelete } from "react-icons/ai";
import { FaCartPlus} from "react-icons/fa6";
import { useDispatch } from "react-redux";
import Rating from "./Rating";

const WishListItem = ({ item, removeItem ,addToCart}) => {
    return <>
        <li className="flex items-center gap-4 border-t border-gray-700 py-4">
            <img
                src={item.mainImg}
                alt=""
                className="w-14 sm:w-32 sm:h-20 rounded object-cover"
            />

            <div>
                <h3 className="text-base font-semibold">{item.title}</h3>
               <Rating item={item}></Rating>
            </div >

            <div className="flex flex-1 items-center justify-end flex-col sm:flex-row gap-2">
                <div className="font-bold sm:mr-2 sm:text-xl">${item.price}</div>
                <div className="space-x-2">
                    <button className="transition hover:text-indigo-600">
                        <FaCartPlus className="sm:text-2xl" onClick={()=>addToCart(item.id)} />
                    </button>

                    <button className="transition hover:text-red-600" onClick={() => removeItem(item.id)}>
                        <AiFillDelete className="sm:text-2xl" />
                    </button>
                </div>
            </div>
        </li >
    </>
}

export default WishListItem