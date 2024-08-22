import react from 'react'
import Nav from './components/navbar/Nav';
import Hero from './components/hero/Hero';
import Programs from './components/programs/programs';
import Title from './components/title/Title';
import About from './components/about/About';
import Campous from './components/campus/Campous';
import Testmon from './components/testmon/Testmon';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return(
    <>
    
    <Nav/>
    <Hero/>
    <div className="container">
    <Title title="our program" subtitle="What We Offer"/>
    <Programs/>
    <About/>
    <Title title="GALLERY" subtitle="Campus Photos"/>
    <Campous/>
    <Title title="TESTIMONIALS" subtitle="What Students Says"/>
    <Testmon/>
    <Title title="CONTACT US" subtitle="Get in Touch"/>
    <Contact/>
    <Footer/>
    </div>
    
    </>
  )
}

export default App;