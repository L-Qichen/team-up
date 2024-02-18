import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  Login,
  Home,
  MyProjects,
  SingleProject,
  ProjectList
} from './pages'
import { createContext, useState } from 'react'
import { action as loginAction } from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    action: loginAction,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/my-projects',
    element: <MyProjects />,
  },
  {
    path: '/single-project',
    element: <SingleProject />,
  },
  {
    path: '/project-list',
    element: <ProjectList />,
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
