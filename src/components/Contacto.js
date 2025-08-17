import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import "../color/Contacto.css";

export const Contact = () => {
  const formInitialDetails = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formDetails.nombre) errors.nombre = "El nombre es obligatorio.";
    if (!formDetails.email) {
      errors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      errors.email = "El correo electrónico es inválido.";
    }
    if (!formDetails.telefono) {
      errors.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d{9}$/.test(formDetails.telefono)) {
      errors.telefono = "El teléfono debe tener 9 dígitos.";
    }
    if (!formDetails.mensaje) errors.mensaje = "El mensaje es obligatorio.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus({ succes: false, mensaje: "¡Oops! Por favor, completa todos los campos correctamente. 😅" });
      return;
    }
    setButtonText("Enviando...");
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          nombre: formDetails.nombre,
          email: formDetails.email,
          telefono: formDetails.telefono,
          mensaje: formDetails.mensaje,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("Mensaje enviado con éxito:", response);
          setStatus({ succes: true, mensaje: '¡Mensaje enviado con éxito! 😊' });
          setFormDetails(formInitialDetails);
          setFormErrors({});
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          setStatus({ succes: false, mensaje: 'Algo salió mal. Por favor, inténtalo de nuevo.' });
        }
      )
      .finally(() => {
        setButtonText("Enviar");
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contactame</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} md={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.nombre}
                          placeholder="Nombre"
                          onChange={(e) => onFormUpdate('nombre', e.target.value)}
                        />
                        {formErrors.nombre && <p className="error">{formErrors.nombre}</p>}
                      </Col>
                      <Col size={12} sm={6} md={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Correo electrónico"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                        {formErrors.email && <p className="error">{formErrors.email}</p>}
                      </Col>
                      <Col size={12} sm={6} md={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.telefono}
                          placeholder="Teléfono"
                          onChange={(e) => onFormUpdate('telefono', e.target.value)}
                        />
                        {formErrors.telefono && <p className="error">{formErrors.telefono}</p>}
                      </Col>
                      <Col size={12} sm={12} md={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.mensaje}
                          placeholder="Mensaje"
                          onChange={(e) => onFormUpdate('mensaje', e.target.value)}
                        ></textarea>
                        {formErrors.mensaje && <p className="error">{formErrors.mensaje}</p>}
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.mensaje && (
                        <Col>
                          <p className={status.succes === false ? "danger" : "success"}>
                            {status.mensaje}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
