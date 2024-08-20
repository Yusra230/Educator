import FAQ from "./FAQ";

const FAQSection = () => {
    let FAQObj = [
        {
            id: 1,
            question:  `Can I try Coursera Plus first, to make sure it's right for me?`,
            answer: `Yes! We have two options, depending on which payment plan you choose.
                If you opt to make monthly payments, you can take advantage of a 7-day free trial to experience learning with Coursera Plus before you decide to purchase. We do capture your payment information when you subscribe, but you won't be charged until the end of your 7-day free trial. So, if you decide Coursera Plus isn't right for you, just cancel during the trial period and there will be no charge.
                If you opt to make an annual payment, you'll have up to 14 days to submit a refund request if you decide that Coursera Plus isn't right for you. The process is simple—just go to your My Purchases page within 14 days of your payment and submit a refund request. No additional information is required. Please note that any certificates that you earn within your first 14 days will be revoked if you decide to get a refund within that period.
                For additional information, please see our full refund policy.`,
        },

        {
            id: 2,
            question: 'What is included in Coursera Plus?',
            answer: 'With your Coursera Plus subscription, you get unlimited access to more than 7,000 courses, Projects, Specializations, and Professional Certificate programs in a variety of domains, including data science, business, computer science, health, personal development, humanities, and more. The majority of courses on Coursera are included. Certain courses, Specializations, and Professional Certificate programs are excluded. Coursera Plus also does not include degrees or MasterTrack™ Certificate programs. To determine if a particular offering is included, look for the Coursera Plus badge, or check this list of included content.',
        },

        {
            id: 3,
            question: 'Will I save money with Coursera Plus?',
            answer: `Yes. If you're taking more than 1 course regularly, you could save up to 30% every month. The more you learn, the more you save.`,
        },

        {
            id: 4,
            question: 'How many certificates can I earn with Coursera Plus?',
            answer: `There's no limit. You'll earn a certificate for every course, Project, Specialization, or Professional Certificate you complete.`,
        },

        {
            id: 5,
            question: `What can I do with my certificates once I've earned them?`,
            answer: 'You can showcase them on your LinkedIn profile, add them to your resume, and share them with your network. You can also share them with your employer to demonstrate your new skills, and your ability to apply those skills on the job.',
        },

        {
            id: 6,
            question: 'Can I get reimbursed by my employer for Coursera Plus?',
            answer: `Yes, if your employer offers educational reimbursements that include online learning programs. You'll receive an email with your Coursera Plus receipt to submit.`,
        },

        {
            id: 7,
            question: 'Will Coursera Plus motivate me to learn?',
            answer: 'Based on our data and research, we typically see higher completion rates for Coursera Plus learners. We also hear directly from learners that having a Coursera Plus subscription increases their motivation to learn more.',
        },
    ];

    return <>
        <section className="bg-[url('bg-texture.png')] bg-gray-900 text-white py-12">
            <h2 className="text-center font-bold text-3xl sm:text-4xl mb-6">Frequently asked questions</h2>
            <div className="space-y-4 max-w-screen-lg mx-auto px-2 lg:px-0">
               {FAQObj.map(item=> <FAQ key={item.id} item={item}></FAQ>)}
            </div>
        </section>
    </>
}

export default FAQSection;