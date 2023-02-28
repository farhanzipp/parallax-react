import * as React from "react"
import Hero from "../components/Hero"
import Profile from "../components/Profile"
import Project from "../components/Project"
import '../styles/global.css'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="homepage">
        <Profile />
        <Project />
      </div>
    </>  
  )
  
}