import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ForularioLogin } from './Componentes/FormularioLogin';
import'./css/Login.css'

export const Login = () => {

    const slogans = [
        { title: '<Aprende, crea y triunfa>', description: 'en nuestra academia especializada.' },
        { title: '<Tu puerta al éxito en el desarrollo web>', description: 'nuestra academia te guía hacia el conocimiento.' },
        { title: '<Construye tu camino hacia el éxito>', description: 'en nuestra academia de desarrollo web.' },
        // Agrega más frases según sea necesario
      ];
    
      const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
      const [key, setKey] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
          setKey((prevKey) => prevKey + 1);
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, []);

    return (
        <div>
            
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <Row>
                    <Col key={key} className='m-auto p-5 text-color-slogans' style={{ animation: 'tracking-in-expand-forward-top 1s ease-out' }}>
                    <h1>{slogans[currentSloganIndex].title}</h1>
            <h4>{slogans[currentSloganIndex].description}</h4>
                    </Col>
                    <Col className='m-auto p-5'>
                    <ForularioLogin/> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
