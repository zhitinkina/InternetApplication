import React from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import homi from './homi.jpg';

export const Photos = () => (
    <>

        <Container sm>
            <h2 className="profile__title">Your Photos Delete Title</h2>
        </Container>
        <img variant="top" src={homi} style={{'width': '100%'}} />

    </>
)