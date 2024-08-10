import courses from "../data/courses"
import EducatorPlusCard from "./EducatorPlusCard"

const Courses = () => {
    return <>
        <section className="bg-[url('bg-texture.png')] bg-gray-900 text-white" >
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 sm:py-12 flex">

                <div className="space-y-2 w-[50rem] mr-4">
                    <details
                        className="overflow-hidden rounded border border-gray-700 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-gray-900  p-4 transition"
                        >
                            <span className="text-sm font-medium"> Category </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </summary>

                        <div className="border-t border-gray-700 bg-gray-900">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm "> 0 Selected </span>

                                <button type="button" className="text-sm underline underline-offset-4">
                                    Reset
                                </button>
                            </header>

                            <ul className="space-y-1 border-t border-gray-700 p-4">
                                <li>
                                    <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                        <input type="checkbox" id="FilterInStock" className="size-5 rounded border-gray-300" />

                                        <span className="text-sm font-medium"> AI (5+) </span>
                                    </label>
                                </li>

                                <li>
                                    <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                        <input type="checkbox" id="FilterPreOrder" className="size-5 rounded border-gray-700" />

                                        <span className="text-sm font-medium"> Programming (3+) </span>
                                    </label>
                                </li>

                                <li>
                                    <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                        <input type="checkbox" id="FilterOutOfStock" className="size-5 rounded border-gray-700" />

                                        <span className="text-sm font-medium"> Data Science (10+) </span>
                                    </label>
                                </li>

                                <li>
                                    <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                        <input type="checkbox" id="FilterOutOfStock" className="size-5 rounded border-gray-700" />

                                        <span className="text-sm font-medium"> Web Development (10+) </span>
                                    </label>
                                </li>

                                <li>
                                    <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                        <input type="checkbox" id="FilterOutOfStock" className="size-5 rounded border-gray-700" />

                                        <span className="text-sm font-medium"> App Development (10+) </span>
                                    </label>
                                </li>

                                <li>
                                    <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                        <input type="checkbox" id="FilterOutOfStock" className="size-5 rounded border-gray-700" />

                                        <span className="text-sm font-medium"> Cloud Computing (10+) </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </details>

                    <details
                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                        >
                            <span className="text-sm font-medium"> Price </span>

                            <span className="transition group-open:-rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </summary>

                        <div className="border-t border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm text-gray-700"> The highest price is $600 </span>

                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                    Reset
                                </button>
                            </header>

                            <div className="border-t border-gray-200 p-4">
                                <div className="flex justify-between gap-4">
                                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">$</span>

                                        <input
                                            type="number"
                                            id="FilterPriceFrom"
                                            placeholder="From"
                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        />
                                    </label>

                                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">$</span>

                                        <input
                                            type="number"
                                            id="FilterPriceTo"
                                            placeholder="To"
                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map(item => {
                        return <EducatorPlusCard key={item.id} item={item}></EducatorPlusCard>
                    })}

                </div>
            </div>
        </section>
    </>
}

export default Courses