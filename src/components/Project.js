import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import '../styles/project.css'

const Project = () => {
  const { 
    carouselFragment,
    slideToPrevItem, 
    slideToNextItem 
   } = useSpringCarousel({
    withLoop: true,
    items: [
      {
        id: 'item-1',
        renderItem: (
          <div className='project-box'>
            <h2>ANIQUOTE</h2>
            <a href="www.google.com">
              <img src="" alt="portofolio 1" />
            </a>
            <p>This project using API for generate random quote</p>
          </div>
        )
      },
      {
        id: 'item-2',
        renderItem: (
          <div className='project-box'>
            <h2>KOTAKODE CLONE</h2>
            <a href="www.google.com">
              <img src="" alt="portofolio 2 " />
            </a>
            <p>Landing Page for kotakode using bootstrap and react</p>
          </div>
        )
      },
      {
        id: 'item-3',
        renderItem: (
          <div className='project-box'>
            <h2>RANDOM PORTO</h2>
            <a href="www.google.com">
              <img src="" alt="portofolio 3" />
            </a>
            <p>Random portofolio Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        )
      },
    ]
  })

  return (
    <div className='project-container'>
      <div className='divider'></div>
      <h1 className='project-header'>PROJECTS</h1>
      <h3>Projects I did</h3>
      <div className='carousel-wrapper'>
        <div className='slide-wrapper'>
          <button onClick={slideToPrevItem} className="btn-slide left"></button>
          <button onClick={slideToNextItem} className="btn-slide right"></button>
        </div>
        {carouselFragment}
      </div>
      <div className='visit'>
        <button className='btn-visit'>visit</button>
      </div>
    </div>

  )
}

export default Project