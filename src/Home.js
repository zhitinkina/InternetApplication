import React from 'react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import Jumbotron from './Components/Jumbotron';
import { Img } from './Components/Img';

export const Home = () => (
    <>

        <Container fluid className="home__container">

            <Img />
            <Img />
            <Img />
            <Img />
            <Img />
            <Img />
            <Img />
                
        </Container>

        <Jumbotron />
    </>
)