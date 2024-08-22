import React from 'react'
import './campus.css'
import gallery_1 from '../../../public/assets/gallery-1.png'
import gallery_2 from '../../../public/assets/gallery-2.png'
import gallery_3 from '../../../public/assets/gallery-3.png'
import gallery_4 from '../../../public/assets/gallery-4.png'
import white_arr from '../../../public/assets/white-arrow.png'

export default function Campous() {
  return (
    <>
    <div className="campus">
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn darkbtn'>See more here <img src={white_arr} alt="" /></button>
    </div>
    </>
  )
}
