import React from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import homi from './homi.jpg';

export const Createpublication = () => (
    <>

        <Container sm>
            <h2 className="profile__title">Your Create Publication</h2>

            <Form>
                <Container className="wrap--sm">
                    <Row className="сreatepublication__top">
                        <Container className="сreatepublication__img-main"><img variant="top" src={homi} /></Container>
                        <Form.File id="exampleFormControlFile1" label="Please choose your main photo" />
                        
                        <Form.Group controlId="formBasicDescription" className="">
                            <Form.Label>Write Your Description</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                            <Form.Text className="text-muted">For example, write what emotions these photos evoke in you.</Form.Text>
                        </Form.Group>
                    </Row>
                    <Row className="editingpublication__btn">
                        <Button variant="danger" type="submit" className="editingpublication__btn">Add Photo</Button>
                    </Row>
                </Container>

                <Row className="сreatepublication__bottom">
                    <Container className="сreatepublication__img">
                        <Container className="сreatepublication__img-wrap">
                            <img variant="top" src={homi} />
                            <Button variant="dark" className="publication__img-close"></Button>
                        </Container>

                        <Container className="сreatepublication__img-wrap">
                            <img variant="top" src={homi} />
                            <Button variant="dark" className="publication__img-close"></Button>
                        </Container>
                    </Container>
                </Row>

                <Row className="editingpublication__btn-bottom">
                    <Button variant="success" type="submit" className="editingpublication__btn">Post</Button>
                </Row>
                
            </Form>

        </Container>

    </>
)