import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import RootLayout from './layouts/RootLayout'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import ProductDetails from './components/ProductDetails'
import Home from './pages/Home'
import { useSelector } from 'react-redux'
import Login from './pages/Login'
import Error from './components/Error'



function App() {

  const products = useSelector((state) => {return state.product})


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element = {<Home />} />
        <Route path='product' element = {<Products />} />
        <Route path='cart' element = {<Cart />} />
        <Route path='profile' element = {<Profile />} />
        <Route path='contact' element = {<Contact />} />
        {products.map((product)=>(
            <Route path={`/details/${product.title}`} element={<ProductDetails id={product.id} />} />
        ))}
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Route>
    ),
    { basename: '/Cartify' }
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
