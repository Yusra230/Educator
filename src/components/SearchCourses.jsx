import CategoryButton from "./CategoryButton";
import courses from "../data/courses";
import { useState } from "react";
import EducatorPlusCard from "./EducatorPlusCard";


const SearchCourses = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    let categoryName = [
        {
            id: 1,
            name: 'AI',
        },

        {
            id: 2,
            name: 'Data Science',
        },

        {
            id: 3,
            name: 'Programming',
        },

        {
            id: 4,
            name: 'Web Development',
        },

        {
            id: 5,
            name: 'App Development',
        },

        {
            id: 6,
            name: 'Cloud Computing',
        },
    ];

    const handleCategoryButton = (category) => {
        setSelectedCategory(category);
    }

    const filteredCourses = selectedCategory ? courses.filter(item => item.category === selectedCategory) : [];

    return <>
        <section id="categories" className="bg-gray-900 text-white py-16">
            <div className="mx-auto text-center max-w-5xl">
                <h2 className="text-3xl font-bold">Search the 7,000+ courses in Educator Plus</h2>

                <div className="relative border border-indigo-900 mt-6 mb-4">
                    <label htmlFor="Search" className="sr-only"> Search </label>

                    <input
                        type="text"
                        id="Search"
                        placeholder="e.g. Machine Learning"
                        className="w-full py-2.5 pe-10 shadow-sm sm:text-sm px-4 bg-gray-900 outline-none"
                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                    </span>
                </div>

                <div className="categories space-x-3">
                    <span className="font-bold">Popular</span>
                    {categoryName.map(item => <CategoryButton key={item.id} item={item} handleCategoryButton={handleCategoryButton}></CategoryButton>)}

                </div>
            </div>

            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {selectedCategory && filteredCourses.map(item => <EducatorPlusCard key={item.id} item={item}></EducatorPlusCard>)}
                </div>
            </div>
        </section>
    </>
}

export default SearchCourses;