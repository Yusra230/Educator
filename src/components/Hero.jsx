const Hero = () => {
    return <>
        <section className="bg-[url('bg-texture.png')] bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img
                            alt=""
                            src="header.svg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl text-white">Grow your skills to advance your career path</h2>

                        <p className="mt-4 text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus.
                        </p>

                        <a
                            href="#"
                            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Hero