import React from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import homi from './homi.jpg';

export const Editingprofile = () => (
    <>

        <Container className="wrap--sm">
            <h2 className="profile__title">Your Profile Editing</h2>

            <Form>
                <Row className="editingprofile__top">
                    <Col>
                        <Form.Control placeholder="Your New Name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Your New Email" />
                    </Col>
                </Row>

                <Row className="editingprofile__bottom">
                    <Col className="editingprofile__bottom-col">
                        <Container className="editingprofile__img"><img variant="top" src={homi} /></Container>
                        <Form.File id="exampleFormControlFile1" label="Please choose your photo" />
                    </Col>
                    <Col className="editingprofile__bottom-col-btn">
                        <Button variant="primary" type="submit" className="editingprofile__btn">Save</Button>
                    </Col>
                </Row>
            </Form>
        </Container>

    </>
)