import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import '../styles/project.css'

const Project = () => {
  const { carouselFragment } = useSpringCarousel({
    withLoop: true,
    items: [
      {
        id: 'item-1',
        renderItem: (
          <div className='project-box'>Item 1</div>
        )
      },
      {
        id: 'item-2',
        renderItem: (
          <div>Item 2</div>
        )
      }
    ]
  })

  return (
    <div className='project-container'>
      <h1>PROJECTS</h1>
      
      {carouselFragment} 
      
    </div>

  )
}

export default Project