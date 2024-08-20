const FAQ = ({item}) => {
    return <>
        <details
            className="group border border-s-4 border-indigo-900 bg-gray-900 p-3 [&_summary::-webkit-details-marker]:hidden"
            
        >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="md:text-lg font-medium">
                    {item.question}
                </h2>

                <span className="shrink-0 rounded-full bg-indigo-700 p-1.5 sm:p-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </summary>

            <p className="mt-4 leading-relaxed">
                {item.answer}
            </p>
        </details>
    </>
}

export default FAQ