import React from 'react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import homi from '../homi.jpg';

export const Img = () => (
    <>
            
        <Card className="card">
            <a href="/photos">
                <Card.Img variant="top" src={homi} />
                <Card.Body className="card__boby">
                    <Card.Title className="card__name">Your Name</Card.Title>
                    <Card.Text className="card__description">
                        Your Description This photo shows the beauty of Russia
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
                

    </>
)