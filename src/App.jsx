import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  Login
} from './pages'
import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css's

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
]);

export const currentUserContext = createContext();

function App() {
  const storedCurrUser = JSON.parse(localStorage.getItem("currentUser")) || null;
  const [currentUser, setCurrentUser] = useState(storedCurrUser);

  const currLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  const Logout = () => {
    setCurrentUser(null);
  }

  return (
    <currentUserContext.Provider value={{ currentUser, currLogin, Logout }}>
      <RouterProvider router={router} />
    </currentUserContext.Provider>
  )
}

export default App
