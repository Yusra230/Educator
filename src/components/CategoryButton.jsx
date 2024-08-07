const CategoryButton = ({item}) => {
    return <>
        <a
            href="#"
            className="inline-block rounded-xl bg-indigo-600 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none py-1 px-2"
        >
            {item.name}
        </a>
    </>
}

export default CategoryButton