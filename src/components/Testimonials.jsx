import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

    let testimonialObj = [
        { 
            id : 1,
            image:'testi1.png',
            description:`"I needed the flexibility offered by Educator Plus in order to achieve my goals. I have a full-time job and 3 kids.I learned business statistics and analysis to apply to my job, but my Educator Plus subscription motivated me to keep learning. I have a new career goal to pivot into data analysis and data science. I'm learning Python now!"`,
            name : 'AbiGail P.',
            country :'United States',
        },

        { 
            id : 2,
            image:'testi2.png',
            description:`"Educator Plus keeps me motivated to learn. With each course, I'm getting more value out of my subscription. I can focus on life sciences—my main specialty—but also pursue other interests like society and religion. I can access almost anything with Educator Plus!"`,
            name : 'Shi Gie F.',
            country :'Singapore',
        },

        { 
            id : 3,
            image:'testi3.png',
            description:`"I really appreciate the flexibility I get with Coursera Plus. I can try any course and switch to another one for no additional cost. This motivates me to learn even more—at one point I was taking three courses at the same time!"`,
            name : 'Ines K.',
            country :'France',
        },

    ];

    return <>
        <section className="bg-[url('bg-texture.png')] bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-2xl font-bold text-center">Join thousands of Educator Plus learners achieving their goals</h2>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                  {testimonialObj.map(item=> <TestimonialCard key={item.id} item={item}></TestimonialCard>)}
                </div>
            </div>
        </section>
    </>
}

export default Testimonials