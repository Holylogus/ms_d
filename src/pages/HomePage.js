import React from 'react'
import Header from '../components/Header'
import WelcomeSection from '../components/WelcomeSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
      <Header></Header>
      <WelcomeSection></WelcomeSection>
      <AboutSection></AboutSection>
      <Footer></Footer>
    </div>
  )
}

export default HomePage
