import React from "react"
import "../global/styles.scss"

import SEO from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"
import RecentWork from "../components/RecentWork"
import Events from "../components/events"
import Hire from "../components/hire"
import Footer from "../components/footer"

const Index = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <RecentWork />
      <Events />
      <Hire />
      <Footer />
    </div>
  )
}

export default Index
