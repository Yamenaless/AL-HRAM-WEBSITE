import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ProductsPage from "./pages/products-page/ProductsPage";
import WhoWeArePage from "./pages/who-we-are-page/WhoWeArePage";
import ContactPage from "./pages/contact-page/ContactPage";
import Post from "./components/cards-section/post/Post";
import SingleProduct from "./components/products/singleProduct/SingleProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Link to="/الهرم">Go To Home</Link>} />
      <Route path="/الهرم" element={<HomePage />} />
      <Route path="/الهرم/:id" element={<Post />} />
      <Route path="منتجاتنا" element={<ProductsPage />} />
      <Route path="منتجاتنا/:id" element={<SingleProduct />} />
      <Route path="من-نحن" element={<WhoWeArePage />} />
      <Route path="تواصل-معنا" element={<ContactPage />} />
    </Routes>
  );
};

export default App;
