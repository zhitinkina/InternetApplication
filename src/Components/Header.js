import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
    .navbar-brand {
        font-size: 24px;
        font-weight: 600;
        color: #000;
        cursor: pointer;
        &:hover {
            color: #000;
        }
    }
    a, .nav-link {
        font-size: 18px;
        color: #0c0c0c;
        font-weight: 500;
        margin-right: 0rem;
        margin-left: 1rem;
        &:hover {
            text-decoration: underline;
        }
    }
    .row {
        width: 100%;
        justify-content: space-between;
        align-items: inherit;
    }
    .navbar {
        padding: 75px 0 30px;
    }
    .sticky {
        position: fixed;
        top: 0;
        height: 100px;
        width: 100%;
        z-index: 1000;
    }
`

export default function Header() {

    return (
    <>
    <Styles>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Row>
                    <Col xs lg="2"><Navbar.Brand>Photographer's Blog</Navbar.Brand></Col>
                    <Col xs lg="4"><Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} to="/" exact>Work</Nav.Link>
                            <Nav.Link as={NavLink} to="/info">Info</Nav.Link>
                            <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={NavLink} to="/access">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse></Col>
                </Row>
            </Container>
        </Navbar>
    </Styles>
    </>
);
}