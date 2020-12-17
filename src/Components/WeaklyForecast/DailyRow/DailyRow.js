import React, {Component} from "react";
import Row from "react-bootstrap/cjs/Row";
import {Col} from "react-bootstrap";

import "./DailyRow.scss"

class DailyRow extends  Component{

    render() {

        const { time, description, precipitation, temp_high, temp_low } = this.props.data

        return(
            <section className="daily-row__box">
                <Row>
                    <Col lg={3}>
                        { time }
                    </Col>

                    <Col lg={3}>
                        { description }
                    </Col>

                    <Col lg={2}>
                        { precipitation === null? 0 : precipitation }mm
                    </Col>

                    <Col lg={2}>
                        {Math.floor(temp_high)}&#8457;
                    </Col>

                    <Col lg={2}>
                        {Math.floor(temp_low)}&#8457;
                    </Col>
                </Row>
            </section>
        )
    }
}

export default DailyRow