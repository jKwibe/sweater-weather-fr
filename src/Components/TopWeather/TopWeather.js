import React, {Component} from "react";
import "./TopWeather.css";
import {Row, Col}from "react-bootstrap";

class TopWeather extends Component{
    render() {
        const { info } = this.props

        return(
            <section className="top-weather top-weather-info">
                <Row>
                    <Col>
                        <img src={ info === null? "" : info.data.attributes.current.icon } alt="weather icon"/>
                        <br/>
                        { info !== null && info.data.attributes.current.weather_description }

                    </Col>
                    <Col>
                        <p><span>Humidity:</span>{ info !== null && info.data.attributes.current.humidity }</p>
                        <p><span>Feels Like:</span>{ info !== null && info.data.attributes.current.feels_like }</p>
                        <p><span>UVI:</span>{ info !== null && info.data.attributes.current.uvi }</p>
                        <p><span>Visibility:</span>{ info !== null && info.data.attributes.current.visibility }</p>

                    </Col>
                </Row>
                <Row>
                    <section className="top-weather-info__rise-set">
                        <div>
                            <p><span>Sunrise: </span>{ info !== null && info.data.attributes.current.sunrise }</p>
                        </div>
                        <div>
                            <p><span>Sunset: </span>{ info !== null && info.data.attributes.current.sunset }</p>
                        </div>
                    </section>
                </Row>
            </section>
        )
    }
}

export default TopWeather;