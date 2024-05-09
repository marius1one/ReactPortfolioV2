import Layout from './components/Layout/index.jsx';
import './App.scss'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/index.jsx";
import About from "./components/About/index.jsx";
import Contact from "./components/Contact/index.jsx";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            </Route>
      </Routes>
    </>
  )
}

export default App
