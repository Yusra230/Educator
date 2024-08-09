import { Link } from "react-router-dom"

const Header = () => {

    return <>
        <header className="bg-[url('bg-texture.png')] bg-[#2C3162]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                      <a href="" className="text-white text-lg font-bold">EDUCATOR</a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm text-white">
                                <li>
                                    <Link to={'/'} className="transition hover:text-gray-200/75"> Home </Link>
                                </li>

                                <li>
                                    <a className=" transition hover:text-gray-200/75" href="#"> Categories </a>
                                </li>

                                <li>
                                    <Link to={'/courses'} className="transition hover:text-gray-200/75"> Courses </Link>
                                </li>

                                <li>
                                    <a className=" transition hover:text-gray-200/75" href="#"> Services </a>
                                </li>

                                <li>
                                    <a className=" transition hover:text-gray-200/75" href="#"> Testimonials </a>
                                </li>

                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-indigo-600 transition hover:bg-indigo-700  px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="#"
                                >
                                    Login
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                        href="#"
                                    >
                                        Register
                                    </a>
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