import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";
import headerImg from "../assets/img/gatin.gif";
import "aos/dist/aos.css";
import AOS from "aos";
import "../color/Banner.css";
import BackgroundAnimation from "./animation";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const toRotate = useMemo(() => [
    "Backend Developer",
    "Desarrollador Web",
    "Deep Learning con Python",
    "Bases de Datos",
    ".. y más",
  ], []);

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
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
      setLoopNum((prev) => prev + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const createBubble = (event) => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble", "bubble-active");
      document.body.appendChild(bubble);
      const size = Math.random() * 50 + 30;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${event.pageX - size / 2}px`;
      bubble.style.top = `${event.pageY - size / 2}px`;
      setTimeout(() => bubble.remove(), 2000);
    };

    document.body.addEventListener("mousemove", createBubble);
    return () => {
      document.body.removeEventListener("mousemove", createBubble);
    };
  }, []);

  return (
    <section id="home" className="banner-section">
      <BackgroundAnimation />
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="banner-img-container">
            <div data-aos="zoom-in" className="profile-img-wrapper">
              <img
                src={headerImg}
                alt="Imagen de perfil"
                className="profile-img"
              />
            </div>
          <div className="contact-info">
            <p>
              <FaEnvelope className="icon" /> maxwinchez@gmail.com
            </p>
            <p>
              <FaPhone className="icon" /> +(51) 910 339 920
            </p>
          </div>

          </Col>

          <Col xs={12} md={6} className="text-container">
            <div data-aos="fade-right">
              <h2 className="banner-title">Hola, soy Max Winchez</h2>
              <h2 className="highlight-text">{text}</h2>
              <p className="description">
                Desarrollo backend, frontend e integración de soluciones con Deep Learning.
              </p>
              <div className="projects-container">
                <div className="projects-info">
                  Creo proyectos con pasión y dedicación
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="social-links">
        <div className="follow-text">Follow Me</div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/max-winchez-rivera-3719a4237/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/wr.max.404270"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};
