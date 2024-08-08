const FeatureList = ({ item }) => {
    console.log(item);
    return (
        <li className="flex text-left justify-start items-start border-t border-gray-700 p-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-indigo-700 mr-2 flex-shrink-0"  // Fixed size and margin-right added
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span>{item}</span>
        </li>
    );
}

export default FeatureList;
