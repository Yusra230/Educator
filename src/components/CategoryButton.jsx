
const CategoryButton = ({ item, handleCategoryButton }) => {
    return <>
        <button 
           onClick={() => { handleCategoryButton(item.name) }}
            className="inline-block rounded-xl bg-indigo-600 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none py-1 px-2"
        >
            {item.name}
        </button>
    </>
}

export default CategoryButton