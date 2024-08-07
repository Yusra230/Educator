import './App.css'
import EducatorPlus from './components/EducatorPlus'
import EducatorPlusCardSection from './components/EducatorPlusCardSection'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import SearchCourses from './components/SearchCourses'
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
   </div>
  </>
}

export default App
