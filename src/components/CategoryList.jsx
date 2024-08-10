import { useState } from "react";

const CategoryList = ({ item, handleCategory }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        const checked = event.target.checked;
        setIsChecked(checked);
        handleCategory(item.name, checked);
    };

    return <>
        <li>
            <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                <input type="checkbox" id="FilterInStock" className="size-5 rounded border-gray-300" checked={isChecked}
                    onChange={handleCheckboxChange} />


                <span className="text-sm font-medium"> {item.name} ({item.count}) </span>
            </label>
        </li>

    </>
}

export default CategoryList;