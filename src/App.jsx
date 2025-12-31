import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>

      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
