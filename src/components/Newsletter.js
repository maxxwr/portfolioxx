import React, { useState } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import "../color/Newsletter.css";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && (email.indexOf('@') === -1 || email === '')) {
      setStatus('error');
      setMessage('Por favor, introduce un correo válido.');
      return;
    }

    if (telefono && !/^\d{9}$/.test(telefono)) {
      setStatus('error');
      setMessage('¡Oops! Parece que el número de celular no es válido. Intenta de nuevo. 😅');
      return;
    }

    const data = {};
    if (email) data.email = email;
    if (telefono) data.telefono = telefono;

    if (email || telefono) {
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID_NEWSLETTER,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID_NEWSLETTER,
          data,
          process.env.REACT_APP_EMAILJS_USER_ID_NEWSLETTER
        )
        .then(
          (response) => {
            if (email && telefono) {
              setStatus('success');
              setMessage(`¡Tu correo y número de celular se enviaron con éxito! 😊`);
            } else if (email) {
              setStatus('success');
              setMessage(`¡Tu correo electrónico se envió con éxito! 😊`);
            } else if (telefono) {
              setStatus('success');
              setMessage(`¡Tu número de celular se envió con éxito! 😊`);
            }
            setEmail('');
            setTelefono('');
            console.log("Correo y celular enviado correctamente:", response);
          },
          (err) => {
            setStatus('error');
            setMessage('Hubo un error al enviar el correo. Inténtalo más tarde. 😞');
            console.error("Error al enviar el correo:", err);
          }
        );
    } else {
      setStatus('error');
      setMessage('¡Ups! Parece que olvidaste ingresar un correo o un número de celular. 😅');
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              ¡Conecta conmigo!<br />
              Recibe actualizaciones o contáctame directamente
            </h3>
            {status === 'sending' && <Alert>Enviando...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                />
                <input
                  value={telefono}
                  type="tel"
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Tu celular"
                />
                <button type="submit">Enviar</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
