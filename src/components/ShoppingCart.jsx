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
            <div className="mx-auto max-w-screen-xl px- py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold sm:text-4xl">Your Cart</h1>
                    </header>

                    <div className="mt-8 flex flex-col md:flex-row">
                        <ul className="space-y-4 w-[100%] md:w-[70%]">
                            {cartItems.map(item => <CartItem key={item.id} item={item} removeItem={removeItem}></CartItem>)}
                        </ul>

                        <div className="flex justify-center border-gray-100 w-[100%] md:w-[30%]">
                            <div className="space-y-4 w-[100%] md:w-[80%]">
                                <dl className="text-sm">
                                    {/* <div className="flex justify-between">
                                        <dt>Subtotal</dt>
                                        <dd>£250</dd>
                                    </div>

                                    <div className="flex justify-between">
                                        <dt>VAT</dt>
                                        <dd>£25</dd>
                                    </div>

                                    <div className="flex justify-between">
                                        <dt>Discount</dt>
                                        <dd>-£20</dd>
                                    </div>

                                    <div className="flex justify-between !text-base font-medium">
                                        <dt>Total</dt>
                                        <dd>£200</dd>
                                    </div> */}

                                    <h3>Total:</h3>
                                    <h2 className="text-3xl font-bold">$314.96</h2>
                                    <button
                                        type="submit"
                                        className="inline-block  bg-indigo-700 px-5 py-3 text-sm font-medium text-white w-full my-4"
                                    >
                                        Check out
                                    </button>
                                </dl>

                                <div className="flex justify-end">
                                    <span
                                        className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="-ms-1 me-1.5 size-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                            />
                                        </svg>

                                        <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
                                    </span>
                                </div>

                                <div className="flex justify-end">
                                    <a
                                        href="#"
                                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                    >
                                        Checkout
                                    </a>
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