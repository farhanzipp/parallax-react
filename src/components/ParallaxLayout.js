import React from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Hero from './Hero'
import Profile from './Profile'
import Project from './Project'

const ParallaxLayout = () => {
  return (
    //sesuaikan jumlah pages dengan jumlah section yang akan dibuat
    <Parallax pages={2}>     
      <Hero />
      <ParallaxLayer offset={0.9} speed={1}>
        <Profile />
        <Project />
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        
      </ParallaxLayer>
      
    </Parallax>
  )
}

export default ParallaxLayout