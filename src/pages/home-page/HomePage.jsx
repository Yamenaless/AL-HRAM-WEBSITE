import React from 'react'
import Layout from '../../components/layout/Layout';
import WhoWeAre from '../../components/who-we-are-section/WhoWeAre';
import OurServices from '../../components/our-services/OurServices';
import Hero from '../../components/hero/Hero';
import Cards from '../../components/cards-section/Cards';
import CallToAction from '../../components/call-to-action-section/CallToAction';
import Testimonials from '../../components/testimonials/Testimonials';
const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <OurServices />
      {/* <Cards />     */}
       {/* we have a problem with need fix */}
      <CallToAction/>
      <Testimonials/>
    </Layout>
  )
}

export default HomePage 
