import FeatureList from "./FeatureList";

const PriceCard = ({ item }) => {
    console.log(item.features);
    return <>
        <div className="rounded-2xl border border-gray-600 shadow-sm w-96 py-6">
            <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium">
                    {item.planName}
                    <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 text-gray-300">{item.description}</p>

                <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold sm:text-4xl">{item.price}</strong>

                    <span className="text-sm font-medium"> /month</span>
                </p>

                <a
                    className="mt-4 block rounded border border-indigo-600 bg-indigo-600 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                    href="#"
                >
                    {item.buttonText}
                </a>
            </div>

            <div className="">
                <ul className="mt-2 space-y-2 sm:mt-4">
                    {item.features.map(item => <FeatureList item={item}></FeatureList>)}
                </ul>
            </div>
        </div>
    </>
}

export default PriceCard;

