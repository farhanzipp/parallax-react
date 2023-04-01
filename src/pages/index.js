import * as React from "react"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Profile from "../components/Profile"
import Project from "../components/Project"
import Navbar from "../components/Navbar"
import '../styles/global.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Project />
      <Contact />
      <Footer />
    </>  
  )
  
}