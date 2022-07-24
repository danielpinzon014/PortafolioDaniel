import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Row } from 'react-bootstrap';

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const [buttonText, setButtonText] = useState('Send');

  return (
    <section className="contact" id="connect"> 
    <Container>
        <Row className="align-items-center">
            <Col size={12} md={6}>
            <form ref={form} onSubmit={sendEmail} className="contact">
                <Row>
                    <Col size={12} sm={6} className="px-1">
                          <label>Nombre</label>
                          <input type="text" name="user_name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                           <label>Email</label>
                           <input type="email" name="user_email" />
                    </Col>
                    <Col size={12} className="px-1">
                           <label>Mensaje</label>
                           <textarea  rows="6" name="message" />
                           <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                </Row>
           </form>
            </Col>
        </Row>
        </Container>  
    </section>

  );
};
