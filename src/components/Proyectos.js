import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/PETS.png"
import projimg2 from "../assets/img/ADOPTA.png"


export const Proyectos = () => {
    const ui = [
        {
            title: "Prototipo mascotas",
            description: "",
            imgUrl: projImg1,
          },
          {
            title: "PATA protitipo",
            description: "Prototipo academico para PATA",
            imgUrl: projimg2,

          },
    ]
    const adv = [
        {
            title: "Prototipo mascotas",
            description: "",
            imgUrl: projImg1,
          },
          {
            title: "PATA protitipo",
            description: "Prototipo academico para PATA",
            imgUrl: projimg2,

          },
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <h2>Proyectos</h2>
                    <p> Proyectos tanto academicos como profesionales</p>
                    <Tab.Container>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                         <Nav.Link eventKey="first">UI/UX</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                         <Nav.Link eventKey="second">AUDIOVISUAL</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                          <Nav.Link eventKey="third">OTROS</Nav.Link>
                     </Nav.Item>
                  </Nav>
                  <Tab.Content>

                  </Tab.Content>
                  <Tab.Pane eventKey="first">
                      <Row>
                        {
                          ui.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
        
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                       
                    </Tab.Pane>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}