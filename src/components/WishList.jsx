import { useDispatch, useSelector } from "react-redux"
import WishListItem from "./WishListItem"
import courses from "../data/courses";

const WishList = () => {
    const wishlist = useSelector(store => store.wishlist);
    const wishlistItems = courses.filter(course => wishlist.includes(course.id));
    
    const removeItem = (id) => {
    };

    return <>
        <section className=" bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <header className="">
                        <h1 className="text-xl font-bold sm:text-4xl mb-8">Your WishList</h1>
                    </header>

                    <div className="mt-8">
                        <ul className="space-y-4">
                            {wishlistItems.map(item => <WishListItem key={item.id} item={item} removeItem={removeItem}></WishListItem>)}
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    </>
}

export default WishList