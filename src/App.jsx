import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Overview from './components/Overview';
import Brands from './components/Brands';
import Footer from './components/Footer';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';


function App() {

  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <div className="overflow-hidden scroll-smooth">
      <Header />
      <Hero />
      <Overview />
      <Brands />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Product />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
