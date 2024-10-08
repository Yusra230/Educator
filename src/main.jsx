import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from './routes/App.jsx'
import './index.css'
import Courses from './components/Courses.jsx';
import Home from './routes/Home.jsx';
import SingleCourse from './components/SingleCourse.jsx';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Registeration from './components/Registeration.jsx';
import Login from './components/Login.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import WishList from './components/WishList.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: '/courses', element: <Courses /> },
      { path: '/product/:id', element: <SingleCourse /> },
      { path: '/register', element: <Registeration /> },
      { path: '/login', element: <Login /> },
      { path: '/cart', element: <ShoppingCart /> },
      { path: '/wishlist', element: <WishList /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
