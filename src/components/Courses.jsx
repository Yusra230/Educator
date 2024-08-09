import courses from "../data/courses"
import EducatorPlusCard from "./EducatorPlusCard"

const Courses = () => {
    return <>
        <section className="bg-gray-900 text-white" >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8">
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {courses.map(item => {
                        return <EducatorPlusCard key={item.id} item={item}></EducatorPlusCard>
                    })}

                </div>
            </div>
        </section>
    </>
}

export default Courses