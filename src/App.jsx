import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page/HomePage"
import ProductsPage from "./pages/products-page/ProductsPage"
import WhoWeArePage from "./pages/who-we-are-page/WhoWeArePage"
import ContactPage from "./pages/contact-page/ContactPage"


const App = () => {
  return (
    < >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App  