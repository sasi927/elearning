import react from 'react';
import './Hero.css'
import arrow1 from '../../../public/assets/arrow1.png'

const Hero = () => {
    return(
        <>
        <div className="hero container">
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className='btn' style={{display:"inline-flex"}}>Explore more <img style={{width: 20,margin:5}} src={arrow1} alt="" /></button>
            </div>
        </div>
        </>
    )
}
export default Hero;