import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import '../css/Header.css'
import logo_white from "../img/logos/qlm-logo-white.png"

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col xs={{ size: 12 }}>
                            <header className="header-top">
                                <a href={'#'}><img src={logo_white} alt="QLink Mobile" className="logo-white vertical-center" /></a>
                                <span className="header-top-container vertical-center">
                                    <p className="header-top-desc">Call for Assistance</p>
                                    <p className="phone">1-855-QLINK-43</p>
                                </span>
                            </header>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ size: 12 }}>
                            <section>
                                <div className={"main"}>
                                    <p className={"main"}>
                                        <span className={"main3x"}>Unlimited</span><br />
                                        <span className={"main2x"}>International Calling</span><br />
                                        <span className={"main2x"}>in Every plan</span><br />
                                        <br />
                                        <span className={"main"}>
                                        Make free calls to over 60 countries.<br />
                                        No apps, calling cards, or extra<br />
                                        purchases necassary!
                                        </span>
                                    </p>
                                    <input type="text"
                                           name="search-query"
                                           placeholder="Entry Country Name"
                                           className={"search"}
                                           onFocus={(e) => e.target.placeholder = ""}
                                           onBlur={(e) => e.target.placeholder = "Entry Country Name"}
                                    />
                                    <button type="button" className="btn">CHECK COUNTRY</button>
                                </div>
                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ size: 10, offset: 1 }}>
                            <footer>
                                <p>&copy; Q Link Mobile&trade;. All Rights Reserved <a href={'#'}>Privacy Policy</a> <a href={'#'}>Copyright Notice</a> <a href={'#'}>Website & Use Terms</a> <a href={'#'}>Support</a></p>
                            </footer>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
