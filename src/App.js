import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
