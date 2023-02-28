import React from 'react'
import { useState } from 'react'
import { useSpringCarousel, useTransitionCarousel } from 'react-spring-carousel'
import '../styles/project.css'
import projectArr from './projectsArray'
import {BiLinkExternal} from 'react-icons/bi'
import {FiGithub} from 'react-icons/fi'

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
           <a href={i.link} target="_blank">
             <img src="" alt={i.altImg} />
           </a>
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
      <h1 className='project-header'>PROJECTS</h1>
      <h3>Some Cool Stuff I've built</h3>
      <div className='carousel-wrapper'>
        <div className='project-title'>{projectArr[activeItem].title}</div>
        <div className='slide-counter'><span>{activeItem + 1} / {projectArr.length}</span></div>
        {carouselFragment}
        <div className='project-description'>{projectArr[activeItem].info}</div>
      </div>
      <div className='slide-wrapper'>
          <button onClick={slideToPrevItem} className="btn-slide left"></button>
          <a href='#' className='btn-visit' title='visit my project'><BiLinkExternal /></a>
          <a href='#myProfile' className='btn-visit'> <FiGithub /></a>
          
          <button onClick={slideToNextItem} className="btn-slide right"></button>
        </div>
    </div>

  )
}

export default Project