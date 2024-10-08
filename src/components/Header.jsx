import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
    const cart = useSelector(store => store.cart);
    const wishlist = useSelector(store => store.wishlist);
    console.log(cart);

    return <>
        <header className="bg-[url('bg-texture.png')] bg-[#2C3162]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link to={'/'} className="text-white text-lg font-bold">EDUCATOR</Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm text-white">
                                <li>
                                    <Link to={'/'} className="transition hover:text-gray-200/75"> Home </Link>
                                </li>

                                <li>
                                    <a className=" transition hover:text-gray-200/75" href="#categories"> Categories </a>
                                </li>

                                <li>
                                    <Link to={'/courses'} className="transition hover:text-gray-200/75"> Courses </Link>
                                </li>

                                <li>
                                    <a className=" transition hover:text-gray-200/75" href="#services"> Services </a>
                                </li>

                                <li>
                                    <a className=" transition hover:text-gray-200/75" href="#testimonials"> Testimonials </a>
                                </li>

                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="flex gap-4 items-center">
                                <div className="relative mr-2">
                                    <Link to={'/cart'}>
                                        <span className="absolute top-0 left-4 transform -translate-y-1/2  bg-indigo-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                            {cart.length}
                                        </span>
                                        <FaCartShopping className="text-2xl text-white" />

                                    </Link>
                                </div>

                                <div className="relative mr-2">
                                    <Link to={'/wishlist'}>
                                        <span className="absolute top-0 left-4 transform -translate-y-1/2  bg-indigo-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                           {wishlist.length}
                                        </span>
                                        <FaRegHeart className="text-2xl text-white" />

                                    </Link>
                                </div>


                                <div className="hidden sm:flex">
                                    <Link to={'/login'}
                                        className="rounded-md bg-indigo-600 transition hover:bg-indigo-700  px-5 py-2.5 text-sm font-medium text-white shadow"
                                    >
                                        Login
                                    </Link>
                                </div>

                                <div className="hidden sm:flex">
                                    <Link to={'/register'}
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-700"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    </>
}

export default Header