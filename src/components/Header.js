import React, {Fragment} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { AsyncTypeahead, Highlighter } from 'react-bootstrap-typeahead';

import Rates from "./Rates";
import Footer from './Footer';

import '../css/Header.css'
import logo_white from "../img/logos/qlm-logo-white.png"

export default class Header extends React.Component {

    state = {
        isLoading: false,
        options: [],
        isSubmitted: false,
        query: '',
        selected: [],
        rates: []
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log(event);

        fetch('http://localhost:3500/api/rates-paygo')
            .then(response => response.json())
            .then(
                rates => {
                    RegExp.escape = function (string) {
                        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
                    };

                    var query = (this.state.selected[0] === undefined) ?  this.state.query : this.state.selected[0].Country;
                    const regex = new RegExp(RegExp.escape(query), 'i');
                    //console.log(regex);

                    const fitered = rates.filter((item) => {
                        return item.Region.match(regex);
                    });

                    if (fitered.length >= 1){
                        this.setState({
                            isSubmitted: true,
                            rates: fitered
                        });
                    } else {
                        this.setState({
                            isSubmitted: true,
                            rates: []
                        });
                    }
                }
            );
    }

    render() {
        const results = {
            selected: this.state.selected,
            query: this.state.query,
            rates: this.state.rates
        };

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
                            <section id={"header"}>
                                <div className={"main"}>
                                    <p className={"main"}>
                                        <span className={"main3x"}>Unlimited</span><br />
                                        <span className={"main2x"}>International Calling</span><br />
                                        <span className={"main2x"}>in Every plan</span><br />
                                        <br />
                                        <span className={"main"}>
                                        Make free calls to over 60 countries.<br />
                                        No apps, calling cards, or extra<br />
                                        purchases necessary!
                                        </span>
                                    </p>
                                    <form onSubmit={this.handleSubmit}>
                                        <div id={"search"}>
                                            <Fragment>
                                                <AsyncTypeahead
                                                    id={"ast"}
                                                    name={"ast"}
                                                    isLoading={this.state.isLoading}
                                                    onChange={(selected) => {
                                                        this.setState({selected: selected});
                                                    }}
                                                    placeholder="Enter Country Name"
                                                    onSearch={(query) => {
                                                        this.setState({isLoading: true,
                                                                                query: query});
                                                        fetch(`http://localhost:3500/api/rates-unlimited`)
                                                            .then(resp => resp.json())
                                                            .then(json => this.setState({
                                                                isLoading: false,
                                                                options: json,
                                                            }));
                                                    }}
                                                    renderMenuItemChildren={(option, props, idx) => (
                                                        <Highlighter search={props.text}>
                                                            {option[props.labelKey]}
                                                        </Highlighter>
                                                    )}
                                                    labelKey={'Country'}
                                                    options={this.state.options}
                                                />
                                            </Fragment>
                                        </div>
                                        <button type="submit" className="btn">CHECK COUNTRY</button>
                                    </form>
                                </div>
                            </section>
                        </Col>
                    </Row>
                    {this.state.isSubmitted && <Rates results={results}/>}
                    <Footer/>
                </Container>
            </div>
        );
    }
}
