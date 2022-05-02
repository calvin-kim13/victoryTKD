import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurClasses from "./Pages/OurClasses";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
