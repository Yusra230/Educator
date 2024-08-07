import EducatorPlusCard from "./EducatorPlusCard"

const EducatorPlusCardSection = () => {
    let EducatorPlusObj = [
        {
            id: 1,
            mainImg:'course1.jpg',
            logo: 'googleL.png',
            logoName: 'Google',
            title: 'Google AI Essentials',

        },

        {
            id: 2,
            mainImg:'course2.jpg',
            logo: 'logo2.png',
            logoName: 'University of Michigan',
            title: 'Python For Everybody',

        },

        {
            id: 3,
            mainImg:'course3.jpg',
            logo: 'logo3.png',
            logoName: 'Vanderbuilt University',
            title: 'Prompt Engineering',

        },

        {
            id: 4,
            mainImg:'course4.jpg',
            logo: 'logo4.png',
            logoName: 'IBM',
            title: 'IBM Data Science',

        },
    ]
    return <>
        <section className="bg-[url('bg-texture.png')] bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">See what you can learn with Educator Plus</h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {EducatorPlusObj.map(item=>{
                         return <EducatorPlusCard key={item.id} item={item}></EducatorPlusCard>
                    })}
                   
                </div>

                <div className="mt-4">
                    <a
                        href="#"
                        className="inline-block rounded bg-indigo-600  px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
                    >
                        Show 8 more
                    </a>
                </div>
            </div>
        </section>
    </>
}

export default EducatorPlusCardSection