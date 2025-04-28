import Navbar from "./components/shared/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Footer from "./components/shared/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { login } from "./context/AuthSlice.js";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");

  //   if (user&&isLoggedIn === "true") {
  //     dispatch(login(JSON.parse(user)));
  //   }
  // }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Toaster className="bg-blue-500" richColors position="top-center" />
      <Footer />
    </div>
  );
}

export default App;
