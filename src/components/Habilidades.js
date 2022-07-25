import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

export const Habilidades = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Habilidades
                        </h2>
                        <p>Estas son mis habilidades como profesional</p>
                        <Carousel responsive={responsive} infinite = {true} className="skill-slider">
                            <div className="item">
                                <img src={meter2} alt="Medidor UI/UX"/>
                                <h5>UI/UIX</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Medidor videos"/>
                                <h5>Edición de vídeos</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Medidor Motion"/>
                                <h5>Motion graphics</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}
