import React from 'react'
import Hero from '../Components/Hero'
import HomeCards from '../Components/HeroCards'
import JobListings from '../Components/JobListings'
import ViewAllJobs
 from "../Components/ViewAllJobs"

function Home() {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobListings isHome={true}/>
    <ViewAllJobs/>
    </>
  )
}

export default Home