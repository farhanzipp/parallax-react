import React from "react"
import {Parallax,ParallaxLayer } from "@react-spring/parallax"
import logo from '../images/far.svg'
import level0 from '../images/background-1.png'
import level1 from '../images/1.svg'
import level2 from '../images/2.svg'
import level3 from '../images/3.svg'
import '../styles/hero.css'

const Hero = () => {
return (
        <Parallax pages={1.3}>  
            <ParallaxLayer
                offset={0}
                factor={0.9} 
                speed={0}
                style={{
                    backgroundImage: `url(${level0})`,
                    backgroundSize: 'cover'
                }}>
            </ParallaxLayer>
            <ParallaxLayer
                className="layerImg"
                offset={0} 
                speed={0.3}
                style={{
                    backgroundImage: `url(${level1})`,
                    backgroundPosition: 'left bottom'
                }}>
            </ParallaxLayer>
            <ParallaxLayer
                className="layerImg"
                offset={0} 
                speed={0.5}
                style={{
                    backgroundImage: `url(${level2})`,
                    backgroundSize: '200%',
                    backgroundPosition: 'left bottom'
                }}>
            </ParallaxLayer>
            <ParallaxLayer
                className="layerImg"
                factor={1.4}
                offset={0} 
                speed={1}
                style={{
                    backgroundImage: `url(${level3})`,
                    backgroundSize: '200%',
                    backgroundPosition: '0% 55%',
                }}>
                <div className="divider-soil"></div>
            </ParallaxLayer>
            <ParallaxLayer
                className="logo"
                offset={0} 
                speed={2.5}
                style={{
                    backgroundImage: `url(${logo})`,
                    backgroundSize: '37vh',
                    backgroundPosition: 'center',
                }}>
            </ParallaxLayer>
        </Parallax>
    )
}

export default Hero