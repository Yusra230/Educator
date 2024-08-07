import { useState } from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {

    let [active, setActive] = useState('individual');

    const handleClick = (name) => {
        setActive(name);
    }

    let pricePlanObj = [
        {
            id: 1,
            planName: 'Single learning program',
            description: 'Learn a single topic or skill and earn a credential',
            price: '49$ - 79$',
            features: {
                feature1: 'Access all courses within the learning program',
                feature2: 'Earn a certificate upon completion after your trial ends',
            },
        },

        {
            id: 2,
            planName: 'Coursera Plus Monthly',
            description: 'Complete multiple courses and earn credentials in the short term',
            price: '49$',
            features: {
                feature1: 'Access 7,000+ courses and Specializations from 170+ leading companies and universities',
                feature2: 'Earn unlimited certificates after your trial ends',
                feature3: 'Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts',
                feature4: 'Choose from more than 15 Professional Certificate programs from industry leaders like Google, Facebook, and more',
            },
        },

        {
            id: 3,
            planName: 'Coursera Plus Annual',
            description: 'Combine flexibility and savings with long-term learning goals',
            price: '$399',
            features: {
                feature1: 'Save when you pay up front for the year',
                feature2: 'Enjoy maximum flexibility to achieve work/life balance and learn at your own pace',
            },
        },
    ];

    return <>
        <section className="bg-gray-900 text-white py-10">
            <h2 className="text-3xl font-bold text-center">Choose the plan that's right for you or your team's goals</h2>
            <div className="border border-gray-600 mx-auto w-96 mt-6 p-3 rounded-full">
                <button onClick={() => handleClick('individual')}
                    className={`inline-block rounded-full py-3 text-sm font-medium text-white focus:outline-none w-1/2 hover:text-gray-300 text-center ${active == 'individual' && 'bg-indigo-600'}`}
                >
                    For Individuals
                </button>

                <button onClick={() => handleClick('team')}
                    className={`inline-block rounded-full py-3 text-sm font-medium text-white transition hover:text-gray-300 focus:outline-none w-1/2 text-center ${active == 'team' && 'bg-indigo-600'}`}
                >
                    For Teams
                </button>
            </div>

            <div className="max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 text-center">
                   {pricePlanObj.map(item=><PriceCard key={item.id} item={item}></PriceCard>)}
                   
                </div>
            </div>

        </section>
    </>
}

export default Pricing;