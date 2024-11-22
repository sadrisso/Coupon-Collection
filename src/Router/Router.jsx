import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import About from "../components/About";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            
        ]
    },
    {
        path: "/about",
        element: <About />
    }
])