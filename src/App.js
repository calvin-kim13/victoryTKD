import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Sidebar from "./components/Sidebar";
import { BackTop } from "antd";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <AnimatedRoutes />
      <BackTop className="back-to-top" />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
