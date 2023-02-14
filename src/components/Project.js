import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import '../styles/project.css'

const Project = () => {
  const { carouselFragment } = useSpringCarousel({
    items: [
      {
        id: 'item-1',
        renderItem: (
          <div>Item 1</div>
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
      <h1 className='profile-header'>PROJECTS</h1>
        <div>
          {carouselFragment}
        </div>
    </div>
  )
}

export default Project