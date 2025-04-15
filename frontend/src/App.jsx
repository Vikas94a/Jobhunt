import Navbar from "./components/shared/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Toaster className="bg-blue-500" richColors position="top-center" />
      <Footer/>
    </div>
  );
}

export default App;
