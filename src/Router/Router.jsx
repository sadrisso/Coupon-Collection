import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: "Hello"
    },
    {
        path: "/about",
        element: "About"
    }
])