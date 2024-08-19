import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import courses from "../data/courses";


const ShoppingCart = () => {
    const cart = useSelector(store => store.cart);
    const cartItems = courses.filter(course => cart.includes(course.id));
    console.log(cartItems);
    return <>
        <section className=" bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold sm:text-4xl">Your Cart</h1>
                    </header>

                    <div className="mt-8">
                        <ul className="space-y-4">
                           {cartItems.map(item=> <CartItem key={item.id} item={item}></CartItem>)}
                        </ul>

                        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                            <div className="w-screen max-w-lg space-y-4">
                                <dl className="space-y-0.5 text-sm">
                                    <div className="flex justify-between">
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
                                    </div>
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