import EducatorPlusServiceCard from "./EducatorPlusServiceCard";

const EducatorPlus = () => {
    let EducatorPlusServices =[
        {
            id : 1 ,
            title : 'Learn anything',
            description:'Explore any interest or trending topic, take prerequisites, and advance your skills',
        },

        {
            id : 2 ,
            title : 'Save money',
            description:' Spend less money on your learning if you plan to take multiple courses this year',
        },

        {
            id : 3 ,
            title : 'Flexible learning',
            description:' Learn at your own pace, move between multiple courses, or switch to a different course',
        },

        {
            id : 4 ,
            title : 'Unlimited certificates',
            description:'Earn a certificate for every learning program that you complete after your trial ends at no additional cost',
        },
    ];

    return <>
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Invest in your career with Educator Plus</h2>

                    <p className="mt-4 text-gray-300 py-4">
                        Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
                  {EducatorPlusServices.map(item=>{
                    return <EducatorPlusServiceCard key={item.id} item={item} />
                  })}
                 
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block rounded bg-indigo-600  px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
                    >
                        Start 7-day Free Trial
                    </a>
                </div>
            </div>
        </section>
    </>
}

export default EducatorPlus;