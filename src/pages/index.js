import * as React from "react"
import Hero from "../components/Hero"
import Profile from "../components/Profile"
import '../styles/global.css'

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      
      <Profile />
    </>  
  )
  
}