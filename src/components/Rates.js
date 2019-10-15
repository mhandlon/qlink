import React from 'react';
import {Col, Row} from "reactstrap";

import '../css/Rate.css'

import green_check_mark from "../img/Greencheckmark.png"
import gray_check_mark from "../img/Greycheckmark.png"

export default class Rates extends React.Component {

    /*
    constructor(props) {
        super(props);
    }
     */

    render() {
        const country = (this.props.results.selected.length === 1) ? this.props.results.selected[0].Country : this.props.results.query;
        if (this.props.results.selected.length === 1) {
            var flagImage = require("../img/flags/" + country.toLowerCase().replace(" ","_") + ".png")
        }

        if (this.props.results.selected.length
            && this.props.results.rates.length) {

            var rows = this.props.results.rates.map((row) => {
                return (<tr>
                    <td>{row.Region}</td>
                    <td>${row.Rate}</td>
                </tr>);
            });

            return (
                <Row>
                    <Col xs={{size: 12}}>
                        <section id={"rates"}>
                            <img className={"checkmark"} src={green_check_mark} alt={"green check mark"}></img>
                            <p className={"rate_top"}>We've got you covered in</p>
                            <span className={"rate_top org"}>{country} <img src={flagImage} alt={country}/></span>

                            <table className="table table-borderless">
                                <thead>
                                <tr>
                                    <th scope="col">Region/Provider</th>
                                    <th scope="col">Rate Per Minute</th>
                                </tr>
                                </thead>
                                <tbody>
                                {rows}
                                </tbody>
                            </table>
                            <p>Enjoy unlimited minutes and texting to {country} when you purchase any plan starting at
                                $10!<br/>Make calls to landlines and mobile phones in {country}!</p>
                            <div className={"rates"}>
                                <button type="submit" className="btn center">SHOP PLANS</button>
                            </div>
                        </section>
                    </Col>
                </Row>
            );
        } else {
            return (
                <Row>
                    <Col xs={{size: 12}}>
                        <section id={"rates"}>
                            <img className={"checkmark"} src={gray_check_mark} alt={"gray check mark"}></img>
                            <p className={"rate_top"}>We're sorry, Service Unavailable in</p>
                            <p className={"rate_top country_not_found"}>{country}</p>
                            <p>Q Link Mobile is unable to offer colling ot texting to {country} at this time.
                                Please check back soon, as we are constantly working to expand our network! In
                                the meantime, view out list of <a href={'#'} className={"select_countries"}>Select Countries</a> to which you
                                may enjoy unlimited minutes and texting with all monthly plans.</p>
                        </section>
                    </Col>
                </Row>
            );
        }
    }
}
