import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Navbar from './pages/Navbar'
import DotNet from './pages/Children/DotNet'
import Mern from './pages/Children/Mern'
import Python from './pages/Children/Python'
import Java from './pages/Children/Java'
import Student from './pages/Student'
const App = () => {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<>
      <Navbar/>
      <Home/>
      </>
    },
    {
      path:"/about",
      element:<>
      <Navbar/>
      <About/>
      </>
    },
    {
      path:"/services",
      element:<>
      <Navbar/>
      <Services/>
      </>,
      children:[
        {
          path:"java",
          element:<Java/>
        },
        {
          path:"python",
          element:<Python/>
        },
        {
          path:"mern",
          element:<Mern/>
        },
        {
          path:"dotnet",
          element:<DotNet/>
        }
      ]
    },
    {
      path:"/contact",
      element:<>
      <Navbar/>
      <Contact/>
      </>
    },
    {
      path:"/student/:id",
      element:<Student/>
    },
    {
      path:"*",
      element:<ErrorPage/>
    }
  ])
  return (
    <div>
        
        <RouterProvider router={routes}/>
    </div>
  )
}

export default App
