import React, { useState } from 'react'
import './ImageSlider.css'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const ImageSlider = () => {

    const [currentId, setCurrentId] = useState(1)

    const pics = [
        pic1,
        pic2,
        pic3
    ]

    const previousSlideHandler = () => {
        setCurrentId((id) => id === 0 ? pics.length - 1 : id - 1)
    }

    const nextSlideHandler = () => {
        setCurrentId((id) => (id + 1) % pics.length)
    }

  return (
    <>
        <div className="slider">
            <div className="image">
                <img src={pics[currentId]} alt="" />
            </div>
            <div className="buttons">
                <div className="previous" onClick={previousSlideHandler}><FaArrowCircleLeft /></div>
                <div className="next" onClick={nextSlideHandler}><FaArrowCircleRight /></div>
            </div>
        </div>
    </>
  )
}

export default ImageSlider