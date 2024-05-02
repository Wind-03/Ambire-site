import './App.css'
import Hero from "./components/Hero"
import Reasons from "./components/Reasons"
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Questions from "./components/Questions"
import Footer from "./components/Footer"
function App() {
  return (
    <div>
      <Hero/>
      <Reasons/>
      <Testimonials/>
      <Blog />
      <Questions />
      <Footer />
    </div>
  )
}

export default App
