import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle  } from "react-bootstrap-icons";
import headerIMG from "../assets/img/Banner.jpg"

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Diseñador UI/UX", "Editor de vídeos"];
    const [text, setText] = useState('');
    const [delta,setDelta] = useState(300-Math.random()*100);
    const [index, setIndex] = useState(1);
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return(
     <section className="banner" id="Inicio"> 
     <Container>
        <Row className="aling-items-center">
            <Col xs={12} md={6} xl={7} >
                <span className="tagline">Bienvenido a mi portafolio </span>
                <h1> Hola! Soy Daniel, y soy <h1 className="Letras">  {text}</h1></h1>
                <p>
                Ingeniero en Multimedia con experiencia en creación de contenido para redes sociales, producción audiovisual y en la creación de interfaces multimedia. Me especializo en procesos de diseño para productos 
                digitales tanto para web como para móvil. Busco un puesto que me permita explotar mis habilidades y que me permita crecer junto con la empresa.
                </p>
                <button onClick={(href="https://www.instagram.com/ohmyted_") => console.log('connect')}>CONTACTAME <ArrowRightCircle size={25} /></button>
            </Col>
            <Col  xs={12} md={6} xl={5}>
                <img src={headerIMG} alt="Banner IMG"/>
            </Col>
        </Row>
     </Container>
     </section>   
    )
}