const FeatureList = ({features}) => {
    return <> <li className="flex items-center gap-1">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-indigo-700"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>

        <span className="text-start">{features.feature1}</span>
    </li>
    </>
}

export default FeatureList;