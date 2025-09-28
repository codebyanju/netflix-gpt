// import Login from "components/Login";
import Browse from '@/components/Browse'
import Login from '@/components/Login.jsx'

import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default Body
