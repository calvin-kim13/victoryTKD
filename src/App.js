import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
