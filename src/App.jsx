import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import RootLayout from './layouts/RootLayout'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Contact from './pages/Contact'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element = {<Products />} />
        <Route path='cart' element = {<Cart />} />
        <Route path='profile' element = {<Profile />} />
        <Route path='contact' element = {<Contact />} />


      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
