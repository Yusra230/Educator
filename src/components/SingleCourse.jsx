import { useParams } from "react-router-dom";
import courses from "../data/courses";

const SingleCourse = () => {
    const params = useParams();

    const id = Number(params.id);

    const course = courses.find(course => course.id === id);
    console.log(course);

    return <>
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="relative h-50 overflow-hidden rounded-lg sm:h-80 lg:order-last">
                        <img
                            alt=""
                            src={course.mainImg}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <div className="flex items-center mb-4">
                            <img src={course.logo} className="w-10 mr-4" alt="" />
                            <p>{course.logoName}</p>
                        </div>
                        <h2 className="text-3xl font-bold sm:text-4xl">{course.title}</h2>

                        <p className="mt-4 text-gray-300">
                            {course.description}
                        </p>

                        <a
                            href="#"
                            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
                        >
                           Enroll Today
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default SingleCourse