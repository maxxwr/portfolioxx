import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaPhone, FaFileDownload, FaCheckCircle } from "react-icons/fa";
import headerImg from "../assets/img/gatin.gif";
import projImg1 from "../assets/img/cv1.jpg";
import projImg2 from "../assets/img/cv2.jpg";
import projImg3 from "../assets/img/cv3.jpg";
import projImg4 from "../assets/img/cv4.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import "../color/Banner.css";
import BackgroundAnimation from "./animation";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const period = 2000;

  const toRotate = useMemo(() => [
    "Backend Developer",
    "Desarrollador Web",
    "Deep Learning / Machine Learning",
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

  const [showCertificates, setShowCertificates] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const certificados = [
    { imgUrl: projImg2, link: "https://drive.google.com/uc?export=download&id=1hHLLjzBGhpmZz75Yw71SzAXpZ1k4Qaj_" },
    { imgUrl: projImg4, link: "https://drive.google.com/uc?export=download&id=15mZpyr-wWbWIg1-webTs11uVMQUAod1X" },
    { imgUrl: projImg1, link: "https://drive.google.com/uc?export=download&id=12_JWoJfyEom5j5_B7lpSxg6vSsDiIbxr" },
    { imgUrl: projImg3, link: "https://drive.google.com/uc?export=download&id=1q6cmKXOZY9Qsf0rELl7tPX1I6C5igNF4" }
  ];

  const imagesPerPage = 1;
  const maxPage = Math.ceil(certificados.length / imagesPerPage) - 1;
  const toggleCertificates = () => {
    setShowCertificates(!showCertificates);
  };


  const currentImages = certificados.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  const handleDownloadClick = (link) => {
    setIsDownloading(true);
    let progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev === 100) {
          clearInterval(progressInterval);
          setIsDownloading(false);
          setDownloadComplete(true);
          window.location.href = link;
          setTimeout(() => {
            setDownloadComplete(false);
          }, 2000);
          return prev;
        }
        return prev + 10;
      });
    }, 300);
  };

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

              <button
                className="vvd btn-contact"
                onClick={() => handleDownloadClick("https://drive.google.com/uc?export=download&id=1y0K9-PaHigcoIV8ZdliIJUKoeFaAEnUR")}
              >
                {isDownloading ? (
                  <>
                    <span className="loading-text">{progress}%</span>
                    <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                  </>
                ) : downloadComplete ? (
                  <>
                    <FaCheckCircle style={{ marginRight: '10px', color: 'green' }} />
                    <span>Descarga Completada</span>
                  </>
                ) : (
                  <>
                    <FaFileDownload style={{ marginRight: '10px' }} /> Descargar CV
                  </>
                )}
              </button>
            </div>
          </Col>

          <Col xs={12} md={6} className="text-container">
            <div data-aos="fade-right">
              <br />
              <h2 className="banner-title">Hola, soy Max Winchez</h2>
              <h2 className="highlight-text">{text}</h2>
              <p className="description">
                Desarrollo backend, frontend e integración de soluciones con DL & ML.
              </p>
              <div className="projects-container">
                <div className="projects-info">
                  Transformando ideas en realidad
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
            href="https://www.facebook.com/profile.php?id=100094055649759"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="social-icon">
          <Button variant="link" onClick={toggleCertificates} className="btn-logros">
            Ver Logros
          </Button>
        </div>
      </div>
      <Modal
        show={showCertificates}
        onHide={toggleCertificates}
        size="lg"
        centered
        className="certificates-modal"
      >
        <Modal.Header>
          <Button variant="danger" onClick={toggleCertificates} className="close-button">
            Cerrar
          </Button>
        </Modal.Header>

        <Modal.Body>
          <Row>
            {currentImages.map((certificado, index) => (
              <Col key={index} className="d-flex justify-content-center mb-4">
                <div className="certificado-card">
                  <img
                    src={certificado.imgUrl}
                    alt={`Certificado ${index + 1}`}
                    className="certificado-img"
                  />
                </div>
              </Col>
            ))}
          </Row>

          <div className="d-flex justify-content-center mt-3">
            {currentImages.map((certificado, index) => (
              <button
                onClick={() => handleDownloadClick(certificado.link)}
                key={index}
                className="d-flex justify-content-center mt-3 btn-descargar"
              >
                {isDownloading ? (
                  <>
                    <span className="loading-text">{progress}%</span>
                    <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                  </>
                ) : downloadComplete ? (
                  <>
                    <FaCheckCircle style={{ marginRight: '10px', color: 'green' }} />
                    <span>Descarga Completada</span>
                  </>
                ) : (
                  <>
                    <FaFileDownload style={{ marginRight: '10px' }} /> Descargar
                  </>
                )}
              </button>
            ))}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="pagination-controls">
            <Button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="pagination-button prev"
            >
              Anterior
            </Button>

            {[...Array(maxPage + 1)].map((_, index) => (
              <Button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`page-number ${currentPage === index ? "active" : ""}`}
              >
                {index + 1}
              </Button>
            ))}

            <Button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === maxPage}
              className="pagination-button next"
            >
              Siguiente
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </section>
  );
};