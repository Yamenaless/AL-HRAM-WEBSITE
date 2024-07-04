import React from 'react'
import Layout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import CtaSection from '../../components/cta-section/CtaSection'

const ProductsPage = () => {
  return (
    <Layout>
      <div>
      <Hero hero_title={"منتجاتنا"} />
      <Products/>
      <CtaSection/>
      </div>
    </Layout>
  )
}

export default ProductsPage
