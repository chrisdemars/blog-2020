import React from "react"

import "../global/styles.scss"
import HeroStyles from "../styles/hero.module.scss"

import Headshot from "../images/headshot.png"

const Hero = () => {
  return (
    <>
      <section className={HeroStyles.heroSection}>
        <div className={HeroStyles.headshotSection}>
          <img src={Headshot} alt="" />
        </div>
        <div className={HeroStyles.miniBio}>
          <h1>Hey there</h1>
          <h2>What is good?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, earum!
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero
