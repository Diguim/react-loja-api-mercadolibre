
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Store from './pages/Store'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Header from './components/Header'
import UserProfile from './pages/UserProfile'
import EditProfile from './pages/EditProfile'

function AppRoutes() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/store" element={ <Store/> } />
        <Route exact path="/cart" element={ <Cart/> } />
        <Route exact path="/login" element={ <Login/> } />
        <Route exact path='/profile' element={ <UserProfile/> } />
        <Route exact path='/profile/edit' element={ <EditProfile/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

// export default function AppRoutes(){}