import React from 'react'
import Layout from '../../components/layout/Layout';
import WhoWeAre from '../../components/who-we-are-section/WhoWeAre';
import OurServices from '../../components/our-services/OurServices';
import Hero from '../../components/hero/Hero';
import Products from '../../components/products-section/Products';
const Home = () => {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <OurServices />
      <Products />
      <WhoWeAre />
    </Layout>
  )
}

export default Home 
