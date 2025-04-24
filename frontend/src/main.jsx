import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./context/store.js";
import { persistStore } from "redux-persist";

//components
import "./index.css";
import App from "./App.jsx";

import Errorview from "./views/Errorview.jsx";
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import Home from "./views/Home.jsx";
import Jobs from "./views/Jobs.jsx";
import Browse from "./views/Browse.jsx";
import StudentDashbord from "./views/Dashbord/student/StudentDashbord.jsx";
import RecruiterDashbord from "./views/Dashbord/recruiter/RecruiterDashbord.jsx";

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
      },{
        path:"/viewprofile",
        element:<StudentDashbord/>
      }
    ],
  },
]);

const persistor = persistStore(store);

console.log(persistor);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
