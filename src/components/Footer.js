import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/MA6X.gif";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "../color/Footer.css";

export const Footer = () => {

  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [fecha, setFecha] = useState(new Date().toLocaleDateString("es-PE", { weekday: "long", day: "numeric", month: "long", year: "numeric" }));

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
      setFecha(new Date().toLocaleDateString("es-PE", { weekday: "long", day: "numeric", month: "long", year: "numeric" }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          {/* para poner el logo parte arriba del iconos redes sociales-> kitar todos los sm={6}*/}
          <Col size={12} sm={6} className="footer-logo-container">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/max-winchez-rivera-3719a4237/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="GitHub" />
              </a>
              <a href="https://www.facebook.com/wr.max.404270" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
            </div>
            <footer className="login-footer">
              <p>
                © {new Date().getFullYear()} Max | Lima, Perú. Todos los derechos reservados.
                <span className="footer-time">{hora}</span>
              </p>
            </footer>
            <div className="footer-date">
              <p>{fecha}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
