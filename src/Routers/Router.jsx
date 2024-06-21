import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../components/Authentication/Login";
import Registration from "../components/Authentication/Registration";
import Dashboard from "../Dashboard/Dashboard";
import EditBiodata from "../Dashboard/UserDashboard/EditBiodata";
import ViewBioData from "../Dashboard/UserDashboard/ViewBioData";
import ManageUsers from "../Dashboard/AdminDashboard/ManageUsers";
import BioDatas from "../Pages/Biodatas/BioDatas";
import ViewDetails from "../Pages/Biodatas/ViewDetails/ViewDetails";
import FavouriteBioDatas from "../Dashboard/AdminDashboard/FavouriteBioDatas";
import Payment from "../Pages/Biodatas/Payment/Payment";
import ContactRequest from "../Dashboard/AdminDashboard/ContactRequest";
import MyContactRequest from "../Dashboard/UserDashboard/MyContactRequest";
import ApprovedPremium from "../Dashboard/AdminDashboard/ApprovedPremium";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Admin from "../Dashboard/AdminDashboard/Admin";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import Error from "../Pages/Error/Error";
import GotMarried from "../Dashboard/UserDashboard/GotMarried";
import SuccessStory from "../Dashboard/AdminDashboard/SuccessStory";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/bioDatas',
        element: <BioDatas></BioDatas>
      },
      {
        path: '/bioData/:id',
        element:  <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
        loader: ({params}) => fetch(`https://love-link-server-nine.vercel.app/bioDatass/${params.id}`)
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
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
      // User  
      {
        path: 'EditBiodata',
        element:  <PrivetRoute><EditBiodata></EditBiodata></PrivetRoute> ,
 
      },
      {
        path: 'viewBioData',
        element:  <PrivetRoute><ViewBioData></ViewBioData> </PrivetRoute>
      },
      {
        path: 'favourite',
        element:  <PrivetRoute><FavouriteBioDatas></FavouriteBioDatas> </PrivetRoute>
      },
      {
        path: 'MyContactRequest',
        element:  <PrivetRoute><MyContactRequest></MyContactRequest></PrivetRoute>
      },
      {
        path: 'gotMarried',
        element: <PrivetRoute><GotMarried></GotMarried></PrivetRoute>
      },


      // admin only
      {
        path: 'admin',
        element: <AdminRoute><Admin></Admin></AdminRoute>
      },
      {
        path: 'manageUsers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,

      },{
        path: 'ContactRequest',
        element: <AdminRoute><ContactRequest></ContactRequest></AdminRoute>
      },
      {
        path: 'ApprovedPremium',
        element: <AdminRoute><ApprovedPremium></ApprovedPremium></AdminRoute>
      },
      {
        path: 'successStory',
        element: <AdminRoute><SuccessStory></SuccessStory></AdminRoute>
      }

    ]
  },

  {
    path: '/Checkout/:id',
    element: <Payment></Payment>,

  }

])
