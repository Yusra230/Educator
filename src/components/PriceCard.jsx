import FeatureList from "./FeatureList";

const PriceCard = ({ item }) => {
    console.log(item.features);
    return <>
        <div className="divide-y divide-gray-600 rounded-2xl border border-gray-600 shadow-sm">
            <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium">
                    {item.planName}
                    <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2">{item.description}</p>

                <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold sm:text-4xl">{item.price}</strong>

                    <span className="text-sm font-medium"> /month</span>
                </p>

                <a
                    className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                    href="#"
                >
                    Get Started
                </a>
            </div>

            <div className="p-4">
                <ul className="mt-2 space-y-2 sm:mt-4">
                    <FeatureList key={item.id} features={item.features}></FeatureList>
                </ul>
            </div>
        </div>
    </>
}

export default PriceCard;

