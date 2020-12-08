import React, {Component} from "react";

import HourCell from "../HourCell/HourCell"
import {Row, Col} from "react-bootstrap";

class Hourly extends Component{
  render() {
      const { hourlyData } = this.props
      let data;
      if (hourlyData !== undefined){
        data =   hourlyData.slice(0, 12).map((i) => i)
      }
      let count = 0;

      return(
          <section className="hour-component">
              <Row>
                  { data && data.map((col) =>
                      <Col key={count ++}>
                          <HourCell data = { col }/>
                      </Col>
                  )}
              </Row>

          </section>
      )
  }
}

export default Hourly;