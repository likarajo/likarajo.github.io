import { HashRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Travel from '../pages/Travel'
import Cities from '../pages/Cities'
import Nature from '../pages/Nature'
import Leisure from '../pages/Leisure'
import Culinary from '../pages/Culinary'
import Blogs from "../pages/Blogs";
import Profession from '../pages/Profession'
import NotFound from "../pages/NotFound";

function App() {
  return (
    <div id="app" style={{alignItems: 'center', minHeight: '82vh', width:' 100%'}}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/travel/cities" element={<Cities />} />
          <Route path="/travel/nature" element={<Nature />} />
          <Route path="/leisure" element={<Leisure />} />
          <Route path="/leisure/culinary" element={<Culinary />} />
          <Route path="/leisure/blogs" element={<Blogs />} />
          <Route path="/profession" element={<Profession />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
