import logo from './logo.svg';
import './App.css';
import { NavBar}  from './components/NavBar';
import  { Banner } from './components/Banner';
import  { Habilidades  } from './components/Habilidades';
import { Proyectos } from './components/Proyectos';
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Habilidades />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
