const CategoryList = ({ item, handleCategory }) => {
    return <>
        <li>
            <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                <input type="checkbox" id="FilterInStock" className="size-5 rounded border-gray-300" onClick={() => handleCategory(item.name)} />


                <span className="text-sm font-medium"> {item.name} ({item.count}) </span>
            </label>
        </li>

    </>
}

export default CategoryList;