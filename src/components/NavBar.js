import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/Tec.PNG';
import navIcon1 from '../assets/img/instagram.svg';
import navIcon2 from '../assets/img/behance.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";


export const NavBar = () => {
    const [ activeLink, SetActiveLink ] = useState('Inicio');
    const [scrolled, seSecrolled] = useState(false);

    useEffect (() =>{
        const onScroll = () => {
            if (window.scrollY >50){
                seSecrolled(true);
            } else {
                seSecrolled (false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        SetActiveLink(value);
    }



    
    return (
      <Router> 
        <Navbar expand="lg" className={scrolled ? "Scrolled":""}>
          <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Inicio" className={activeLink === 'Inicio' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('Inicio')}>Inicio</Nav.Link>
                <Nav.Link href="#Proyectos" className={activeLink === 'Proyectos' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('Proyectos')}>Proyectos</Nav.Link>
                <Nav.Link href="#Habilidades" className={activeLink === 'Habilidades' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('Habilidades')}>Habilidades</Nav.Link>
              </Nav>
              <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.instagram.com/ohmyted_"><img src={navIcon1} alt="" /></a>
                <a href="https://www.behance.net/Daniel_Pinzon"><img src={navIcon2} alt="" /></a>
              </div>
              <HashLink to='https://www.instagram.com/ohmyted_'>
                <button className="vvd"><span> CONTACTAME </span></button>
              </HashLink>
            </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </Router>
      )
} 