import React, { useRef } from 'react'
import './testmon.css';

import slide_fwd from '../../../public/assets/next-icon.png'
import slide_bck from '../../../public/assets/back-icon.png'

import user_1 from '../../../public/assets/user-1.png'
import user_2 from '../../../public/assets/user-2.png'
import user_3 from '../../../public/assets/user-3.png'
import user_4 from '../../../public/assets/user-4.png'


const Testmon = () => {
    const slider = useRef();
    let tx = 0;
    const slideFwd = () => {
if(tx > -50){
    tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBck = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`  
    }

  return (
    <>
    <div className="testimonial" id='testmon'>
        <img src={slide_bck} alt="" className='bck-btn' onClick={slideBck}/>
        <img src={slide_fwd} alt="" className='fwd-btn' onClick={slideFwd}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                   <div className="user-info">
                    <img src={user_1} alt="" /><span>
                    <h3>Emily William</h3>
                    <p>Edusity, USA</p>
                    </span>
                    </div> 
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                   <div className="user-info">
                    <img src={user_2} alt="" />
                    <span>
                    <h3>William Jackson</h3>
                    <p>Edusity, USA</p>
                    </span>
                    </div> 
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                   <div className="user-info">
                    <img src={user_3} alt="" /><span>
                    <h3>Jay Raj Soni</h3>
                    <p>Edusity, USA</p>
                    </span>
                    </div> 
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                   <div className="user-info">
                    <img src={user_4} alt="" />
                    <span>
                    <h3>Ajay Singhania</h3>
                    <p>Edusity, USA</p>
                    </span>
                    </div> 
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Testmon