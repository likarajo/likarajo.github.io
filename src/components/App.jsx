import { HashRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Travel from '../pages/Travel'
import Leisure from '../pages/Leisure'
import Profession from '../pages/Profession'

function App() {
  return (
    <div id="app" style={{alignItems:'center', height:'91vh', width:'100%'}}>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/leisure" element={<Leisure />} />
          <Route path="/profession" element={<Profession />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
