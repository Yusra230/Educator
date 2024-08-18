import { useParams } from "react-router-dom";
import courses from "../data/courses";
import { FaRegClock } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import Testimonials from "./Testimonials";

const SingleCourse = () => {
    scrollTo(0,0);
    const params = useParams();

    const id = Number(params.id);

    const course = courses.find(course => course.id === id);
    console.log(course);

    return <>
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="relative h-50 overflow-hidden rounded-lg h-80 lg:order-last">
                        <img
                            alt=""
                            src={course.mainImg}
                            className="absolute inset-0 h-full w-full object-contain"
                        />
                    </div>

                    <div className="lg:py-10">
                        <div className="flex items-center mb-4">
                            <img src={course.logo} className="w-10 mr-4" alt="" />
                            <p>{course.logoName}</p>
                        </div>
                        <h2 className="text-3xl font-bold sm:text-4xl">{course.title}</h2>

                        <p className="mt-4 text-gray-300">
                            {course.description}
                        </p>

                        <div className="flex py-4 space-x-10">
                            <span className="flex items-center"><span className="bg-indigo-600 p-2 rounded-md mr-2"><FaRegClock /> </span>{course.duration}H</span>

                            <span className="flex items-center"><span className="bg-indigo-600 p-2 rounded-md mr-2"><FaRegStar /> </span>{course.rating}</span>

                            <span className="flex items-center"><span className="bg-indigo-600 p-2 rounded-md mr-2"><BiDollar /></span>{course.price}</span>


                        </div>

                        <a
                            href="#"
                            className="mt-4 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
                        >
                            Enroll Today
                        </a>
                    </div>
                </div>
            </div>

           <Testimonials></Testimonials>

        </section>

    </>
}

export default SingleCourse