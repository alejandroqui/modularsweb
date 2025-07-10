import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
  return (
    <section
      id="faq"
      className="scroll-mt-24 ..."
      style={{
        backgroundColor: '#2d5d25',
        color: '#fdf6ec',
        padding: '50px 0',
      }}
    >
      {/* Encabezado */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>Preguntas Frecuentes</h2>
      </div>

      {/* Contenido FAQ */}
      <Container style={{ maxWidth: '800px' }}>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Cuánto tiempo tarda la entrega de los muebles modulares?</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#2d5d25', color: '#fdf6ec' }}>
              La entrega en la ciudad de Cali es de máximo 2 días, y en el resto del país, máximo 5 días hábiles.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>¿Ofrecen servicio de instalación para los muebles?</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#2d5d25', color: '#fdf6ec' }}>
              Sí, contamos con un servicio de instalación profesional. Nuestro equipo se encargará de que tus muebles queden perfectamente instalados.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>¿Los muebles modulares tienen garantía?</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#2d5d25', color: '#fdf6ec' }}>
              Todos nuestros muebles modulares tienen una garantía de 5 años en la madera, cubriendo defectos de fabricación o problemas de instalación.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>¿Cuentan con servicio contra-entrega?</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#2d5d25', color: '#fdf6ec' }}>
              Sí, ofrecemos servicio contra-entrega en todo el país.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>¿Cuál es el proceso de compra?</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#2d5d25', color: '#fdf6ec' }}>
              Puedes realizar la compra directamente por nuestros canales de marketplace, WhatsApp, Instagram o en nuestra tienda virtual.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
