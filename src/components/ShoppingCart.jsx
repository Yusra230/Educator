import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import courses from "../data/courses";
import cartSlice, { cartActions } from "../store/CartSlice";


const ShoppingCart = () => {
    const cart = useSelector(store => store.cart);
    const cartItems = courses.filter(course => cart.includes(course.id));
    console.log(cartItems);
    const dispatch = useDispatch();

    const removeItem = (id) => {
        const newCart = cart.filter(item => item !== id);
        dispatch(cartActions.removeFromCart(newCart));
        console.log(newCart)
    };

    return <>
        <section className=" bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <header className="">
                        <h1 className="text-xl font-bold sm:text-4xl mb-8">Shopping Cart</h1>
                    </header>

                    <h3 className="font-semibold text-gray-200 mb-2">{cart.length} Courses in Cart</h3>
                    <div className="flex flex-col md:flex-row">
                        <ul className="w-[100%] md:w-[70%]">
                            {cartItems.map(item => <CartItem key={item.id} item={item} removeItem={removeItem}></CartItem>)}
                        </ul>

                        <div className="flex justify-end border-gray-100 w-[100%] md:w-[30%] mt-4">
                            <div className="space-y-3 w-[100%] md:w-[80%]">
                                <div className="text-sm border-b border-gray-500">
                                    <h3 className="text-base text-gray-300 font-semibold">Total:</h3>
                                    <h2 className="text-3xl font-bold">$314.96</h2>
                                    <button
                                        type="submit"
                                        className="inline-block  bg-indigo-700 px-5 py-3 text-sm font-medium text-white w-full my-4 hover:bg-indigo-800 "
                                    >
                                        Check out
                                    </button>
                                </div>

                                <div className="flex justify-end flex-col">
                                    <h3 className="text-base font-semibold mb-3">Promotions</h3>
                                    <div className="relative w-full">
                                        <label htmlFor="Search" className="sr-only"> Search </label>

                                        <input
                                            type="text"
                                            id="Search"
                                            placeholder="Enter Coupon"
                                            className="w-full  border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm px-4 text-black outline-none "
                                        />

                                        <span className="absolute inset-y-0 end-0 grid">
                                            <button type="button" className="bg-indigo-700 hover:bg-indigo-800 px-4">
                                                Apply
                                            </button>
                                        </span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default ShoppingCart;