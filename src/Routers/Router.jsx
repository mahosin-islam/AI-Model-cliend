import { createBrowserRouter } from "react-router";
import Root from "../Fixed/Root";
import Home from "../Pages/Home/Home";
import Register from "../Componets/Register";
import Login from "../Componets/Login";
import Dtails from "../Componets/Dtails";
import AllModel from "../Pages/AllModel/AllModel";
import AddModel from "../Pages/AddModel/AddModel";
import Mymodel from "../Pages/Mymodel/Mymodel";
import Update from "../Pages/Update/Update";
import ModelPurchase from "../Pages/ModelPurchase/ModelPurchase";
import Private from "./Private";
import PurseDtails from "../Componets/PurseDtails";
import Error from "../Componets/Error";

 export const router =createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/Home',
                element:<Home></Home>
            },
            {
                path:'/Allmodel',
                element:
                    <AllModel></AllModel>
    
            },
            {
                path:'/Addmodel',
                element:<Private>
                    <AddModel></AddModel>
                </Private>
            },
            {
                path:'/Mymodel',
                element:<Private>
                    <Mymodel></Mymodel>
                </Private>
            },
            {
              path:'/update/:id',
               loader:({params})=>fetch(`https://server-side-xi.vercel.app/model/${params.id}`),
               element:<Update></Update>
            },
            {
                path:'/ModelPurchase',
                element:<Private>
                    <ModelPurchase></ModelPurchase>
                </Private>
            },
            {
           path:'Register',
           element:<Register></Register>
            },
            {
                path:'/LogIn',
                element:<Login></Login>

            },
            {
                path:"/Dtails/:id",               
                element:<Private>
                    <Dtails></Dtails>
                </Private>
            },
            {
              path: "/PurseDtails/:id",
              element:<Private>
                <PurseDtails></PurseDtails>
              </Private>
            },
            {
                path:'*',
                element:<Error></Error>
            }
        ]
    }
])