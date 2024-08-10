import { useState } from "react";
import courses from "../data/courses"
import CategoryList from "./CategoryList";
import EducatorPlusCard from "./EducatorPlusCard"

const Courses = () => {
    let AICount = courses.filter(item => item.category == 'AI');
    let dataScienceCount = courses.filter(item => item.category == 'Data Science');
    let programmingCount = courses.filter(item => item.category == 'Programming');
    let webDevtCount = courses.filter(item => item.category == 'Web Development');
    let appDevCount = courses.filter(item => item.category == 'App Development');
    let cloudComputingCount = courses.filter(item => item.category == 'Cloud Computing');

    let [filteredItems, setFilteredItems] = useState(courses);
    let [selectedItems, setSelectedItems] = useState([]);

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        return arr1.every((value, index) => value === arr2[index]);
    }

    const handleResetButton = () => {
        setFilteredItems(courses);
    }


    const handleCategory = (category, checkboxStatus) => {
        console.log(checkboxStatus);
        if (checkboxStatus == true) {
            selectedItems.push(category);
            console.log(selectedItems);
            setSelectedItems(selectedItems);
            if (category == 'All') {
                setFilteredItems(courses);
            }
            // console.log(category);
            else {
                let filteredItem = courses.filter(item => item.category == category);
                console.log(filteredItem);
                if (arraysEqual(filteredItems, courses)) {
                    console.log('equal');
                    console.log(filteredItem);
                    setFilteredItems(filteredItem);
                }

                else {
                    let mergedItems = [...filteredItem, ...filteredItems];
                    console.log(mergedItems);
                    setFilteredItems(mergedItems);
                }
            }
        }

        else {
            selectedItems.pop(category);
            console.log(selectedItems);
            setSelectedItems(selectedItems);
            let removeItems = filteredItems.filter(item => item.category != category);
            setFilteredItems(removeItems);
        }
    }

    let categoryItems = [
        {
            id: 1,
            name: 'All',
            count: courses.length,
        },

        {
            id: 2,
            name: 'AI',
            count: AICount.length,
        },

        {
            id: 3,
            name: 'Data Science',
            count: dataScienceCount.length,
        },

        {
            id: 4,
            name: 'Programming',
            count: programmingCount.length,
        },

        {
            id: 5,
            name: 'Web Development',
            count: webDevtCount.length,
        },

        {
            id: 6,
            name: 'App Development',
            count: appDevCount.length,
        },

        {
            id: 7,
            name: 'Cloud Computing',
            count: cloudComputingCount.length,
        },
    ];

    return <>
        <section className="bg-[url('bg-texture.png')] bg-gray-900 text-white" >
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 sm:py-12 flex items-start justify-start">

                <div className="space-y-2 mr-4 w-[15rem] flex-shrink-0">
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
                                <span className="text-sm "> {selectedItems.length} Selected </span>

                                <button type="button" className="text-sm underline underline-offset-4" onClick={handleResetButton}>
                                    Reset
                                </button>
                            </header>

                            <ul className="space-y-1 border-t border-gray-700 p-4">
                                {categoryItems.map(item => <CategoryList key={item.id} item={item} handleCategory={handleCategory}></CategoryList>)}
                            </ul>
                        </div>
                    </details>

                    <details
                        className="overflow-hidden rounded border border-gray-700 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-2 bg-gray-900 p-4 transition"
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

                        <div className="border-t border-gray-700 bg-gray-900">
                            <header className="flex items-center justify-between p-4">
                                <span className="text-sm"> The highest price is $600 </span>

                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                    Reset
                                </button>
                            </header>

                            <div className="border-t border-gray-700 p-4">
                                <div className="flex justify-between gap-4">
                                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                        <span className="text-sm">$</span>

                                        <input
                                            type="number"
                                            id="FilterPriceFrom"
                                            placeholder="From"
                                            className="w-full bg-gray-900 text-white rounded-md border-gray-700 shadow-sm sm:text-sm border-b px-1"
                                        />
                                    </label>

                                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                        <span className="text-sm">$</span>

                                        <input
                                            type="number"
                                            id="FilterPriceTo"
                                            placeholder="To"
                                            className="w-full bg-gray-900 text-white rounded-md border-gray-700 shadow-sm sm:text-sm border-b px-1"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map(item => {
                        return <EducatorPlusCard key={item.id} item={item}></EducatorPlusCard>
                    })}

                </div>

            </div>
        </section>
    </>
}

export default Courses