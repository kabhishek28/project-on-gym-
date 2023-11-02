import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import hero_img from '../../assets/hero_image.png'
import hero_img_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
              <div></div>
              <span>The best fitness club in town</span>
            </div>
            <div className="hero-text">
              <div>
                <span className="stroke-text">Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal body</span>
              </div>
              <div>
                <span>
                  In here we will help to shape and built your idea and live to fullest
                </span>
              </div>
            </div>
            <div className="figures">
              <div>
                <span>+140</span>
                <span>expert coaches</span>
              </div>
              <div>
                <span>+978</span>
                <span>members joined</span>
              </div>
              <div>
                <span>+50</span>
                <span>fitness programs</span>
              </div>
            </div>
            <div className="hero-btn">
              <button className="btn">Get started</button>
              <button className="btn">Learn more</button>
            </div>
        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>
          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>
          <img src={hero_img} className="hero-img" alt="" />
          <img src={hero_img_back} className="hero-img-back" alt="" />
          <div className="calories">
            <img src={Calories} alt="" />
            <span>Calories Burnt</span>
            <span>220 kcal</span>
          </div>
        </div>
    </div>
  )
}

export default Hero