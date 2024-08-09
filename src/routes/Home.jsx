import EducatorPlusCardSection from "../components/EducatorPlusCourses"
import FAQSection from "../components/FAQSection"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"
import SearchCourses from "../components/SearchCourses"
import EducatorPlus from "../components/ServicesSection"
import Testimonials from "../components/Testimonials"
import TrustedCompanies from "../components/TrustedCompanies"

const Home = () => {
    return <>
        <Hero></Hero>
        <TrustedCompanies></TrustedCompanies>
        <EducatorPlus></EducatorPlus>
        <EducatorPlusCardSection></EducatorPlusCardSection>
        <SearchCourses></SearchCourses>
        <Testimonials></Testimonials>
        <Pricing></Pricing>
        <FAQSection></FAQSection>
    </>
}

export default Home