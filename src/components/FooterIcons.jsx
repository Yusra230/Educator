const FooterIcons = ({item}) => {
    return <>
        <li>
            <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:text-indigo-700/75"
            >
                <span className="sr-only">{item.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        fillRule="evenodd"
                        d={item.path}
                        clipRule="evenodd"
                    />
                </svg>
            </a>
        </li>
    </>
}

export default FooterIcons