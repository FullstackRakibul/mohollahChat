
import { Card } from 'antd'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/mainRouteMap'

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
