import React from 'react';
import {Col, Row} from "reactstrap";

import '../css/Footer.css'

const Footer = () => (
    <Row>
        <Col xs={{ size: 10, offset: 1 }}>
            <footer>
                <p>&copy; Q Link Mobile&trade;. All Rights Reserved <a href={'#'}>Privacy Policy</a> <a href={'#'}>Copyright Notice</a> <a href={'#'}>Website & Use Terms</a> <a href={'#'}>Support</a></p>
            </footer>
        </Col>
    </Row>
);

export default Footer;
