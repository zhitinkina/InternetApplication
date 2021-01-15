import React from 'react';
import { Nav, Button, Card, Col, Row, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import homi from './homi.jpg';
import {Publications} from './Components/Publication';

export const Profile = () => (
    <>
        <Container>
            <h2 className="profile__title">Your Profile</h2>

            <Row className="profile__main">
                <Col sm={7} className="profile__main-1">
                    <Container className="profile__main-img"><img variant="top" src={homi} /></Container>
                    <Container className="profile__main-info">
                        <span className="profile__name">Your Name</span>
                        <span className="profile__email">Your Email</span>
                        <span className="profile__date-registration">Your Registration Date</span>
                    </Container>
                </Col>
                <Col sm={5} className="profile__main-2">
                    <Nav.Link as={NavLink} to="/editingprofile" className="btn btn-dark profile__btn">Profile Editing</Nav.Link>
                    <Button variant="danger" type="submit" className="profile__btn">Sign Out</Button>
                    <Nav.Link as={NavLink} to="/createpublication" className="btn btn-success">Create Post</Nav.Link>
                </Col>
            </Row>
            
            <h3 className="profile__title">Your Publications</h3>
            <Row className="profile__publication">
                <Publications />
                <Publications />
                <Publications />
                <Publications />
                <Publications />
            </Row>
        </Container>
    </>
)