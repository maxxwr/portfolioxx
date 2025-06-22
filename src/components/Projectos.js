import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProyectoCard";
import projImg1 from "../assets/img/spin.jpeg";
import projImg2 from "../assets/img/bustrap.jpeg";
import projImg3 from "../assets/img/apkmovile.jpeg";
import projImg4 from "../assets/img/ractga.jpeg";
import projImg5 from "../assets/img/html1.gif";
import projImg6 from "../assets/img/phpconex.jpeg";
import projImg7 from "../assets/img/phpgoo.jpeg";
import projImg8 from "../assets/img/iber.jpeg";
import projImg9 from "../assets/img/unity.jpeg";
import projImg10 from "../assets/img/AI.gif";
import projImg11 from "../assets/img/reco.gif";
import projImg12 from "../assets/img/datos.gif";
import projImg13 from "../assets/img/analisis.jpeg";
import projImg14 from "../assets/img/tareas.jpeg";
import colorSharp2 from "../assets/img/react.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../color/Projectos.css"

export const Projects = () => {

  const webProjects = [
    {
      title: "API REST con Java",
      description: "API de comprobantes electrónicos con Java, MySQL y React.",
      imgUrl: projImg1,
    },
    {
      title: "Interfaz React",
      description: "Componentes dinámicos y navegación interactiva con React.",
      imgUrl: projImg4,
    },
    {
      title: "Web Dinámica con PHP",
      description: "Conexión a base de datos con MySQL y PHP.",
      imgUrl: projImg7,
    },
    {
      title: "Tienda Online",
      description: "Carrito funcional y estructura básica de e-commerce.",
      imgUrl: projImg6,
    },
    {
      title: "Sistema de Usuarios",
      description: "Login, registro y control de roles con PHP y JavaScript.",
      imgUrl: projImg5,
    },

    {
      title: "Landing Page Responsive",
      description: "Página web adaptable con Bootstrap.",
      imgUrl: projImg2,
    },
  ];

  const mobileProjects = [
    {
      title: "App Estilo Uber",
      description: "Desarrollo de una app sencilla tipo Uber con mapas y localización.",
      imgUrl: projImg8,
    },
    {
      title: "Aplicación de Tareas",
      description: "Creación de una app en Android Studio para organizar y gestionar tareas diarias con recordatorios.",
      imgUrl: projImg14,
    },
    {
      title: "Aplicación de Realidad Aumentada",
      description: "Proyecto en Unity que utiliza la cámara del dispositivo para mostrar modelos 3D en RA.",
      imgUrl: projImg9,
    },
    {
      title: "App de Gestión Básica",
      description: "Aplicación móvil para registrar y consultar datos, desarrollada en Visual Studio 2022 con C# y convertida en APK.",
      imgUrl: projImg3,
    },
  ];


  const aiProjects = [
    {
      title: "Chatbot Inteligente",
      description: "Desarrollo de un chatbot avanzado usando TensorFlow, Flask y Transformers, basado en técnicas de Deep Learning.",
      imgUrl: projImg10,
      className: "gif-image",
    },
    {
      title: "Sistema de Recomendación",
      description: "Creación de un sistema personalizado de recomendaciones utilizando técnicas de IA y modelos de Deep Learning.",
      imgUrl: projImg11,
      className: "gif-image",
    },
    {
      title: "Clasificador de Datos",
      description: "Implementación de un modelo de clasificación usando Random Forest y comparación con redes neuronales profundas.",
      imgUrl: projImg12,
      className: "gif-image",
    },
    {
      title: "Análisis de Sentimientos",
      description: "Modelo basado en Deep Learning y NLP para analizar y categorizar sentimientos en texto.",
      imgUrl: projImg13,
      className: "",
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>
                    Aquí puedes explorar algunos de mis proyectos en los que he trabajado, incluyendo desarrollo web con React e inteligencia artificial.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="web">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center w-100"
                      id="pills-tab"
                      style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }} // Asegura que las pestañas estén en una fila
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="web">Proyectos Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="mobile">Proyectos Móviles</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="ai">Proyectos de IA</Nav.Link>
                      </Nav.Item>
                    </Nav>


                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="web">
                        <Row>
                          {webProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="mobile">
                        <Row>
                          {mobileProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="ai">
                        <Row>
                          {aiProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
