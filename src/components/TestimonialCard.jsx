const TestimonialCard = ({item}) => {
    return <>
        <blockquote className="rounded-xl bg-gray-900 p-3 sm:p-4 border border-gray-800 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-600/10">
            <img
                alt=""
                src={item.image}
                className="size-40 rounded-full object-cover mx-auto"
            />

            <p className="mt-6 text-base">
                {item.description}
            </p>

            <p className="name mt-6">{item.name} | {item.country}</p>
        </blockquote>
    </>
}

export default TestimonialCard