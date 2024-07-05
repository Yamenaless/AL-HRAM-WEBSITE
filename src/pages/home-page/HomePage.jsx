import React from 'react'
import Layout from '../../components/layout/Layout';
import WhoWeAre from '../../components/who-we-are-section/WhoWeAre';
import OurServices from '../../components/our-services/OurServices';
import Hero from '../../components/hero/Hero';
import Cards from '../../components/cards-section/Cards';
import CallToAction from '../../components/call-to-action-section/CallToAction';
import Testimonials from '../../components/testimonials/Testimonials';
import CtaSection from '../../components/cta-section/CtaSection';
const HomePage = () => {
  return (
    <Layout>
      <Hero hero_title={"الهرم"} hero_sub_title={" ----  عالم التكنولوجيا   ---- "} />
      <WhoWeAre />
      <OurServices />
      <Cards />    
       {/* we have a problem with need fix */}
      <CallToAction/>
      <Testimonials/>
      <CtaSection/>
    </Layout>
  )
}

export default HomePage 
