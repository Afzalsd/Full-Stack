import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './components/Home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Users from "./components/users/Users";
import "./App.css";
import RegisteredUsers from "./components/registered-users/RegisteredUsers";

function App({ children }) {
  //create browser router object
  const browserRouter = createBrowserRouter([
    {
      path:'',
      element:<RootLayout />,
      children:[
        {
          path:'',
          element:<Home />
        },
        {
          path:'register',
          element:<Register />
        },
        {
          path:'login',
          element:<Login />
        },
        {
          path:'users',
          element:<Users />
        },
        {
          path:'registered-users',
          element:<RegisteredUsers />
        }
      ]
    }
  ]);

  return <RouterProvider router={browserRouter}>
    {children}
    </RouterProvider>;
}

export default App;
