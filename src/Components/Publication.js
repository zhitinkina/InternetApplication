import React from 'react';
import { Nav, Card, Col, Row, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import homi from '../homi.jpg';

export const Publications = () => (
    <>
            
        <Col className="publication__container">
            <Container className="publication__img">
                <Card.Img variant="top" src={homi} />
            </Container>
            <Container className="publication__body">
                <Container className="publication__description">Some quick example text to build on the card title and make up the bulk of the card's content.</Container>
                <Container className="publication__btn">
                    <Nav.Link as={NavLink} to="/photos" className="btn btn-info">See Post</Nav.Link>
                    <Nav.Link as={NavLink} to="/editingpublication" className="btn btn-secondary">Editing Post</Nav.Link>
                </Container>

            </Container>
        </Col>    

    </>
)