import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home/home';
import Discover from './routes/discover/discover';
import Join from './routes/join/join';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/join',
    element: <Join />
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
