import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navigation/Navbar"


const App = () => {
  return (
    <div className="container mx-auto  ">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App  