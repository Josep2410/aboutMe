import React from 'react'
import Home from './routes/Home'
import Projects from './routes/Projects'
import Interests from './routes/Interests'
import Feedback from './routes/Feedback'
import Contact from './routes/Contact'
import RootBG from './components/RootBG'
import './App.css'
import {createBrowserRouter, Route, Navigate, createRoutesFromElements, RouterProvider, useRouteError} from 'react-router-dom'


function App() {
  const render =  createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path='/' element={<RootBG/>}
        errorElement={<ErrorBoundary />}
      >
        <Route index element={<Navigate to='home' replace/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='interests' element={<Interests/>}/>
        <Route path='feedback' element={<Feedback/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    )
  )

  return (
      <RouterProvider router={render}/>
  )
}

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}


export default App
