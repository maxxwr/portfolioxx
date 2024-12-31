import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import headerImg from "../assets/img/max.png";
import "aos/dist/aos.css";
import AOS from "aos";
import "../color/Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Backend Developer",
    "Desarrollador Web",
    "Deep Learning con Python",
    "Bases de Datos",
    ".. y mas"
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const createBubble = (event) => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble", "bubble-active");
      document.body.appendChild(bubble);
      const size = Math.random() * 50 + 30; // Tamaño aleatorio
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${event.pageX - size / 2}px`;
      bubble.style.top = `${event.pageY - size / 2}px`;
      setTimeout(() => bubble.remove(), 2000); // Eliminar la burbuja después de la animación
    };

    document.body.addEventListener("mousemove", createBubble);

    return () => {
      document.body.removeEventListener("mousemove", createBubble);
    };
  }, []);

  return (
    <section id="home" className="banner-section">
      <Container>
        <Row className="align-items-center">
          {/* Imagen del perfil */}
          <Col xs={12} md={6} className="banner-img-container">
            <div data-aos="zoom-in" className="profile-img-wrapper">
              <img
                src={headerImg}
                alt="Imagen de perfil"
                className="profile-img"
              />
            </div>
            <div className="contact-info">
              <p>maxwinchez@gmail.com</p>
              <p>+ (51) 910 339 920</p>
            </div>
          </Col>

          {/* Texto principal */}
          <Col xs={12} md={6} className="text-container">
            <div data-aos="fade-right">
              <h3 className="banner-title"><h2>Hola, soy max winchez</h2></h3>
              <h2 className="highlight-text">{text}</h2>
              <p className="description">
                Desarrollo backend, aplicaciones web con React e integración de soluciones con Deep Learning.
              </p>
              <div class="projects-container">
                <div class="projects-info">
                  Creo proyectos con pasión y dedicación
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Redes sociales con "Sígueme" */}
      <div className="social-links">
        <div className="follow-text">Follow Me</div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/feed/" target="_blank" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/" target="_blank" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="social-icon">
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};