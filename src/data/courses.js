let courses = [
    {
        id: 1,
        mainImg: '/course1.jpg',
        logo: '/googleL.png',
        logoName: 'Google',
        title: 'Google AI Essentials',
        description: 'Launch your career in Google AI Essentials. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'AI'
    },

    {
        id: 2,
        mainImg: '/course2.jpg',
        logo: '/logo2.png',
        logoName: 'University of Michigan',
        title: 'Python For Everybody',
        description: 'Launch your career in Python. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '30',
        duration: '15',
        rating : '4.6',
        category: 'Programming'
    },

    {
        id: 3,
        mainImg: '/course3.jpg',
        logo: '/logo3.png',
        logoName: 'Vanderbuilt University',
        title: 'Prompt Engineering',
        description: 'Launch your career in Prompt Engineering. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '30',
        duration: '10',
        rating : '4.7',
        category: 'AI'
    },

    {
        id: 4,
        mainImg: '/course18.jpg',
        logo: '/logo4.png',
        logoName: 'IBM',
        title: 'Data Science',
        description: 'Launch your career in Data Science. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '10',
        duration: '15',
        rating : '4.9',
        category: 'Data Science'
    },

    {
        id: 5,
        mainImg: '/course5.jpg',
        logo: '/googleL.png',
        logoName: 'Google',
        title: 'Data Science',
        description: 'Launch your career in Data Science. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '40',
        duration: '5',
        rating : '5',
        category: 'Data Science'
    },

    {
        id: 6,
        mainImg: '/course6.jpg',
        logo: '/logo4.png',
        logoName: 'IBM',
        title: 'Artificial Intelligance',
        description: 'Launch your career in Artificial Intelligance. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '25',
        duration: '9',
        rating : '4.8',
        category: 'AI'
    },

    {
        id: 7,
        mainImg: '/course7.jpg',
        logo: '/logo2.png',
        logoName: 'University of Michigan',
        title: 'Web Development',
        description: 'Launch your career in Web Development. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'Web Development'
    },

    {
        id: 8,
        mainImg: '/course8.jpg',
        logo: '/logo3.png',
        logoName: 'Vanderbuilt University',
        title: 'App Development',
        description: 'Launch your career in App Development. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'App Development'
    },

    {
        id: 9,
        mainImg: '/course9.jpg',
        logo: '/googleL.png',
        logoName: 'Google',
        title: 'Frontend Development',
        description: 'Launch your career in Frontend Development. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'Web Development'
    },

    {
        id: 10,
        mainImg: '/course10.jpg',
        logo: '/logo2.png',
        logoName: 'University of Michigan',
        title: 'Machine Learning',
        description: 'Launch your career in Machine Learning. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'AI'
    },

    {
        id: 11,
        mainImg: '/course11.jpg',
        logo: '/googleL.png',
        logoName: 'Google',
        title: 'Deep Learning',
        description: 'Launch your career in Deep Learning. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'AI'
    },

    {
        id: 12,
        mainImg: '/course12.jpg',
        logo: '/logo4.png',
        logoName: 'IBM',
        title: 'Cloud Computing',
        description: 'Launch your career in Cloud Computing. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'Cloud Computing'
    },

    {
        id: 13,
        mainImg: '/course13.jpg',
        logo: '/googleL.png',
        logoName: 'Google',
        title: 'AJAX development',
        description: 'Launch your career in AJAX development. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'Web Development'
    },

    {
        id: 14,
        mainImg: '/course14.jpg',
        logo: '/logo2.png',
        logoName: 'University of Michigan',
        title: 'API Integration',
        description: 'Launch your career in API Integration. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'Web Development'
    },

    {
        id: 15,
        mainImg: '/course15.jpg',
        logo: '/logo4.png',
        logoName: 'IBM',
        title: 'Rust',
        description: 'Launch your career in Rust. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'Programming'
    },

    {
        id: 16,
        mainImg: '/course16.jpg',
        logo: '/googleL.png',
        logoName: 'Google',
        title: 'Java',
        description: 'Launch your career in Java. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '20',
        duration: '12',
        rating : '4.5',
        category: 'Programming'
    },

    {
        id: 17,
        mainImg: '/course17.jpg',
        logo: '/logo3.png',
        logoName: 'Vanderbuilt University',
        title: 'React',
        description: 'Launch your career in React. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
        price : '30',
        duration: '10',
        rating : '4.5',
        category: 'Web Development'
    },
];

export default courses;
