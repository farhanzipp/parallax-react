import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import logo from '../images/logo.png'
import level0 from '../images/background-1.png'
import level1 from '../images/level-1.gif'
import level2 from '../images/level-2.gif'
import level3 from '../images/level-3.gif'
import '../styles/parallax.css'

const Hero = () => {
return (
        <Parallax pages={1.5} style={{height: '100vh'}}>
            
            <ParallaxLayer
                offset={0} 
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
                offset={0} 
                speed={1}
                style={{
                    backgroundImage: `url(${level3})`,
                    backgroundSize: '200%',
                    backgroundPosition: 'left bottom'
                }}>
                    
            </ParallaxLayer>
            <ParallaxLayer
            offset={0.9}
            speed={1}
            style={{
                marginTop: '2rem',
                height: '100%',
                backgroundColor: '#1C050F',
                padding: '1rem',
                color: '#fff'
            }}>
            </ParallaxLayer>
            <ParallaxLayer
                
                offset={0} 
                speed={2}
                style={{
                    backgroundImage: `url(${logo})`,
                    backgroundSize: '34vh',
                    backgroundPosition: 'center',
                }}>
            </ParallaxLayer>
            
        </Parallax>
    )
}

export default Hero