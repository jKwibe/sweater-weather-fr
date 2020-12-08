import React, {Component} from "react";
import Row from "react-bootstrap/cjs/Row";
import {Col} from "react-bootstrap";

import "./DailyRow.css"

class DailyRow extends  Component{

    render() {
        return(
            <section className="daily-row__box">
                <Row>
                    <Col lg={3}>
                        {this.props.data.time}
                    </Col>

                    <Col lg={3}>
                        {this.props.data.description}
                    </Col>

                    <Col lg={2}>
                        {this.props.data.precipitation === null? 0 : this.props.data.precipitation}mm
                    </Col>

                    <Col lg={2}>
                        {Math.floor(this.props.data.temp_high)}&#8457;
                    </Col>

                    <Col lg={2}>
                        {Math.floor(this.props.data.temp_low)}&#8457;
                    </Col>
                </Row>
            </section>
        )
    }
}

export default DailyRow