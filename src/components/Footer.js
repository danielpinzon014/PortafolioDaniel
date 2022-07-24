import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/Tec.PNG';
import navIcon1 from '../assets/img/instagram.svg';
import navIcon2 from '../assets/img/behance.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.instagram.com/ohmyted_"><img src={navIcon1} alt="" /></a>
                <a href="https://www.behance.net/Daniel_Pinzon"><img src={navIcon2} alt="" /></a>
            </div>
            <p>Copyright 2022. Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
