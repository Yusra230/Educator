import { Link } from "react-router-dom";

const EducatorPlusCard = ({ item }) => {
    const printId = () => {
        console.log(item.id);
    }
    return <>
        <Link to={`/product/${item.id}`}
            className=" bg-gray-900 block rounded-xl border border-gray-800 p-6 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-600/10"
            href="#"
            onClick={() => printId()}
        >
            <img src={item.mainImg} alt="" />

            <div className="mt-4 flex">
                <img src={item.logo} className="w-6" alt="" />
                <p className="ml-2">{item.logoName}</p>
            </div>
            <h2 className="mt-4 text-basic font-bold text-white">{item.title}</h2>

            <p className="mt-4 text-sm text-gray-300">
                Beginner - Course
            </p>
        </Link>
    </>
}

export default EducatorPlusCard;