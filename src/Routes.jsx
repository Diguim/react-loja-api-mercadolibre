
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Store from './pages/Store'
import Home from './pages/Home'
import Cart from './pages/Cart'

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/store" element={ <Store/> } />
        <Route exact path="/cart" element={ <Cart/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

// export default function AppRoutes(){}