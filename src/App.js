import "./index.css";
import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";
import { BackTop } from "antd";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Instructors from "./Pages/Instructors";
import ClassSchedule from "./Pages/ClassSchedule";
import Contact from "./Pages/Contact";
import TinyHero from "./Pages/TinyHero";
import Children from "./Pages/Children";
import TeenAdult from "./Pages/TeenAdult";
import Weapons from "./Pages/Weapons";
import Sparring from "./Pages/Sparring";
import EliteCompetition from "./Pages/EliteCompetition";
import OurClasses from "./Pages/OurClasses";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import News from "./Pages/News";
import Sidebar2 from "./components/Sidebar2";

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Sidebar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="classes" element={<OurClasses />} />
        <Route path="/tiny-heroes" element={<TinyHero />} />
        <Route path="/children" element={<Children />} />
        <Route path="/teen-adult" element={<TeenAdult />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/sparring" element={<Sparring />} />
        <Route path="/elite-competition" element={<EliteCompetition />} />
        <Route path="/class-schedule" element={<ClassSchedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <BackTop className="back-to-top" />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
