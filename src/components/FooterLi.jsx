const FooterLi = ({ item }) => {
    return <>
        <li>
            <a className="text-gray-200 transition hover:text-gray-400/75" href="#">
                {item}
            </a>
        </li>

    </>
}

export default FooterLi;