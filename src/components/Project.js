import React from 'react'
import { useState } from 'react'
import { useSpringCarousel, useTransitionCarousel } from 'react-spring-carousel'
import '../styles/project.css'
import projectArr from './projectsArray'

const Project = () => {
  const [activeItem, setActiveItem] = useState(1)
  const { 
    carouselFragment,
    useListenToCustomEvent,
    slideToPrevItem, 
    slideToNextItem 
   } = useSpringCarousel({
    withLoop: true,
    items: projectArr.map((i) => ({
      id: i.id,
      renderItem: (
        <div className='project-box'>
           <h2>{i.title}</h2>
           <a href="{i.link}" target="_blank">
             <img src="" alt={i.altImg} />
           </a>
           <p>{i.info}</p>
        </div>
      ),
    }))
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(event.nextItem.id)
    } 
  });

  return (
    <div className='project-container'>
      <div className='divider'></div>
      <h1 className='project-header'>PROJECTS</h1>
      <h3>Projects I did</h3>
      <div className='carousel-wrapper'>
        {carouselFragment}
      </div>
      <div className='slide-wrapper'>
          <button onClick={slideToPrevItem} className="btn-slide left"></button>
          <button className='btn-visit'>{projectArr[activeItem].info}</button>
          <div>{activeItem + 1} / {projectArr.length}</div>
          <button onClick={slideToNextItem} className="btn-slide right"></button>
        </div>
      <div className='visit'>
        <p></p>
      </div>
    </div>

  )
}

export default Project