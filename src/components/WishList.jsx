import { useDispatch, useSelector } from "react-redux"
import WishListItem from "./WishListItem"
import courses from "../data/courses";
import { WishListActions } from "../store/WiishListSlice";
import { cartActions } from "../store/CartSlice";
import { Link } from "react-router-dom";

const WishList = () => {
    const wishlist = useSelector(store => store.wishlist);
    const wishlistItems = courses.filter(course => wishlist.includes(course.id));
    const dispatch = useDispatch();

    const removeItem = (id) => {
        const newWishlist = wishlist.filter(item => item !== id);
        dispatch(WishListActions.removeFromWishList(newWishlist));
        console.log(newWishlist)
    };

    const addToCart = (id) => {
        dispatch(cartActions.addToCart(id));
    }

    return <>
        <section className=" bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <header className="">
                        <h1 className="text-xl font-bold sm:text-4xl mb-8">Your WishList</h1>
                    </header>
                    <h3 className="font-semibold text-gray-200 mb-2">{wishlist.length} Courses in Wishlist</h3>
                    {wishlist.length == 0 && <div className="flex items-center justify-center flex-col">
                        <img src="emptyCart.png" alt="" />
                        <h3>Your wishlist is empty. Keep shopping to add your favourite course!</h3>
                        <Link to={'/courses'}
                            type="submit"
                            className="inline-block bg-indigo-700 px-5 py-3 text-sm font-medium text-white my-8 hover:bg-indigo-800 "
                        >
                            Keep Shopping
                        </Link>
                    </div>}

                    <div className="mt-8">
                        <ul className="space-y-4">
                            {wishlistItems.map(item => <WishListItem key={item.id} item={item} removeItem={removeItem} addToCart={addToCart}></WishListItem>)}
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    </>
}

export default WishList