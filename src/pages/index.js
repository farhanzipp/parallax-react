import * as React from "react"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Profile from "../components/Profile"
import Project from "../components/Project"
import '../styles/global.css'

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Project />
      <Contact />
    </>  
  )
  
}