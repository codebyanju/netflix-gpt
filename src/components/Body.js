// import Login from "components/Login";
import Browse from "components/Browse";
import Login from "components/Login";

import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
