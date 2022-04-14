import "./index.css";
import Header from "./components/Header";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Instructors from "./components/Instructors";
import ClassSchedule from "./components/ClassSchedule";
import Trial from "./components/Trial";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/class-schedule" element={<ClassSchedule />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
