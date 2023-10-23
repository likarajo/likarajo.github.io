import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Travel from '../pages/Travel'
import Leisure from '../pages/Leisure'
import Profession from '../pages/Profession'

function App() {
  return (
    <div id="app" style={{alignItems:'center', height:'91vh', width:'100%'}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/travel" element={<Travel />} />
          <Route exact path="/leisure" element={<Leisure />} />
          <Route exact path="/profession" element={<Profession />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
