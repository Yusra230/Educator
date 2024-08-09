import './App.css'
import EducatorPlusCardSection from './components/EducatorPlusCourses'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import SearchCourses from './components/SearchCourses'
import EducatorPlus from './components/ServicesSection'
import Testimonials from './components/Testimonials'
import TrustedCompanies from './components/TrustedCompanies'

function App() {
  return <>
  <div > 
   <Header></Header>
   <Hero></Hero>
   <TrustedCompanies></TrustedCompanies>
   <EducatorPlus></EducatorPlus>
   <EducatorPlusCardSection></EducatorPlusCardSection>
   <SearchCourses></SearchCourses>
   <Testimonials></Testimonials>
   <Pricing></Pricing>
   <FAQSection></FAQSection>
   <Footer></Footer>
   </div>
  </>
}

export default App
