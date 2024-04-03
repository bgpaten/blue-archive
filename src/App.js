import Footer from "./component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Character from "./pages/game/Character";
import Student from "./pages/game/Student";
import Detail from "./pages/game/Detail";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Character />} />
          <Route path="/student" element={<Student />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer nama="BgPaten"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
