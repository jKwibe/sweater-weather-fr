import React, {Component} from "react";
import "./CityInfo.css"
import {Row, Col} from "react-bootstrap";

class CityInfo extends Component{

    render() {

        const { info } = this.props

        const unixTime = Date.now()
        let formattedDate = new Date(unixTime)
        let date = formattedDate.toLocaleString('en-US', {
            day: '2-digit',
            month: 'long'
        })

        let time = formattedDate.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
        })

        return(
            <section className="city-info">
                <Row>
                    <Col>
                        <img src={ info === null? "" : info.data.attributes.current.icon } alt="weather icon"/>
                        { info !== null && info.data.attributes.current.weather_description } <br/>
                        { info !== null && info.data.attributes.current.temp } &#8457;
                    </Col>
                    <Col>
                        { info !== null && info.data.attributes.city },
                        { info !== null && info.data.attributes.state } <br/>
                        { info !== null && info.data.attributes.country } <br/>
                        { time }, { date } <br/>

                        <a href="#" rel="noreferrer">Change favorite Location</a>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default CityInfo;