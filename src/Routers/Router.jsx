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

 export const router =createBrowserRouter([
    {
        path: '/',
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
                element:<Private>
                    <AllModel></AllModel>
                </Private>
            },
            {
                path:'/Addmodel',
                element:<AddModel></AddModel>
            },
            {
                path:'/Mymodel',
                element:<Mymodel></Mymodel>
            },
            {
                path:'/upadate',
                element:<Update></Update>
            },
            {
                path:'/ModelPurchase',
                element:<ModelPurchase></ModelPurchase>
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
                path:"/Dtails",
                element:<Dtails></Dtails>
            },
            
        ]
    }
])