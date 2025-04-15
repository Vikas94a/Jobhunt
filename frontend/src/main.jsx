import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Errorview from "./views/Errorview.jsx";
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import Home from "./views/Home.jsx";
import Jobs from "./views/Jobs.jsx";
import Browse from "./views/Browse.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorview />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
