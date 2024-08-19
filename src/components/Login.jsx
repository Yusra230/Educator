import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { Link } from "react-router-dom";
const Login = () => {
    scrollTo(0,0);
    return <>

        <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-gray-900 text-white">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 lg:h-full ">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Hello, Welcome Back</h1>

                </div>

                <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black outline-none"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none text-black"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label htmlFor="MarketingAccept" className="flex gap-4">
                            <input
                                type="checkbox"
                                id="MarketingAccept"
                                name="marketing_accept"
                                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                            />

                            <span className="text-sm ">
                                Remember me
                            </span>
                        </label>

                        <a href="">Forgot Password?</a>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-indigo-700 px-5 py-3 text-sm font-medium text-white w-full"
                        >
                            Sign in
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm">
                            Don't have an account?
                            <Link to={'/register'} className="underline"> Click here</Link>
                        </p>

                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="flex items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white w-1/3 mt-8"
                        >
                            <FaApple className="text-2xl mr-2" /> App Store
                        </button>

                        <button
                            type="submit"
                            className="flex items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white w-1/3 mt-8"
                        >
                            <BiLogoPlayStore className="text-2xl mr-2"/> Google Play
                        </button>
                    </div>
                </form>
            </div>

            <div className="relative w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt=""
                    src="login.png"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>

      
    </>
}

export default Login;