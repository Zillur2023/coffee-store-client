import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Conponents/AddCoffee.jsx';
import UpdateCoffee from './Conponents/UpdateCoffee.jsx';
import SignUp from './Conponents/SignUp.jsx';
import SignIn from './Conponents/SignIn.jsx';
import AuthProvider from './Conponents/Providers/AuthProvider.jsx'
import Users from './Conponents/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-ejf4y7zie-zillur-rahmans-projects.vercel.app/coffee')
  },
  {
    path: 'addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-ejf4y7zie-zillur-rahmans-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  {
    path: '/signIn',
    element: <SignIn></SignIn>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-ejf4y7zie-zillur-rahmans-projects.vercel.app/user')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
