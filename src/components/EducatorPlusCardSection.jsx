const EducatorPlusCardSection=() => {
    return <>
     <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">See what you can learn with Educator Plus</h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <a
                        className="block rounded-xl border border-gray-800 p-6 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-600/10"
                        href="#"
                    >
                       <img src="course1.jpg" alt="" />

                       <div className="mt-2 flex">
                        <img src="googleL.png" className="w-6" alt="" />
                        <p className="ml-2">Google</p>
                       </div>
                        <h2 className="mt-4 text-basic font-bold text-white">Google AI Essentials</h2>

                        <p className="mt-4 text-sm text-gray-300">
                           Beginner - Course
                        </p>
                    </a>

                    <div
                        className="block rounded-xl border border-gray-800 p-6 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-600/10"
                        href="#"
                    >
                       <img src="course2.jpg" alt="" />

                        <h2 className="mt-4 text-xl font-bold text-white">Save money</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Spend less money on your learning if you plan to take multiple courses this year
                        </p>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-6 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-600/10"
                        href="#"
                    >
                        <img src="course3.jpg" alt="" />

                        <h2 className="mt-4 text-xl font-bold text-white">Flexible learning</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Learn at your own pace, move between multiple courses, or switch to a different course
                        </p>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-6 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-600/10"
                        href="#"
                    >
                       <img src="course4.jpg" alt="" />
                        <h2 className="mt-4 text-xl font-bold text-white">Unlimited certificates</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Earn a certificate for every learning program that you complete after your trial ends at no additional cost
                        </p>
                    </div>

                  

                 
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