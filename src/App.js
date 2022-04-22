import "./index.css";
import Header from "./components/Header";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Instructors from "./components/Instructors";
import ClassSchedule from "./components/ClassSchedule";
import Contact from "./components/Contact";
import Classes from "./components/Classes";
import TinyHero from "./components/TinyHero";
import Children from "./components/Children";
import TeenAdult from "./components/TeenAdult";
import Weapons from "./components/Weapons";
import Sparring from "./components/Sparring";
import EliteCompetition from "./components/EliteCompetition";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/classes" element={<Classes />} />
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
