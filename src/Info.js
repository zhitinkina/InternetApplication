import React from 'react';
import {  Container } from 'react-bootstrap';

export const Info = () => (
    <>
        <Container className="page-info">
            <h2 className="page-info__title" style={{'margin-bottom': '0'}}>About Us</h2>
            <Container className="wrap--sm" style={{height: '50vh', display: 'flex'}}>
                <p className="page-info__text">Hi buddy! I hope you like our site, because we made it with love and care for our users. This site was created with the aim of passing the discipline Development of Internet Applications and I hope we succeeded ...</p>
            </Container>
        </Container>
    </>
)