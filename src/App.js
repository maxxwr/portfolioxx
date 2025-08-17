// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react"; 
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Habilidades";
import { Projects } from "./components/Projectos";
import { Contact } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { BottomNav } from "./components/BottomNav";

function App() {
  useEffect(() => {
    console.log(
      "%c ¡DETENTE OTAKU! ",
      "color: red; font-size: 40px; font-weight: bold;"
    );
    console.log(
      "%cEsta función del navegador está pensado para programadores. Si alguien te pidió que copies y pegues algo aquí para habilitar una función, Si lo haces, te vaciaré la cuenta.",
      "color: while; font-size: 16px;"
    );
    console.log(
      "%c Portafolio creado por Max",
      "color: #07468aff; font-size: 9px; font-style: italic;"
    );
    console.log(
      "\n%cConsulta https://www.facebook.com/profile.php?id=100094055649759 para más información.",
      "color: white; font-size: 14px; font-style: italic; text-decoration: none;"
    );
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
