import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../components/Authentication/Login";
import Registration from "../components/Authentication/Registration";
import Dashboard from "../Dashboard/Dashboard";
import EditBiodata from "../Dashboard/UserDashboard/EditBiodata";
  

  export  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: 'registration',
      element: <Registration></Registration>
    },


    // Dashboard
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'EditBiodata',
          element: <EditBiodata></EditBiodata>
        }
      ]
    }

  ])
