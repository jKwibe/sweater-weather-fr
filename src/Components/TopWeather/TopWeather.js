import React, {Component} from "react";
import "./TopWeather.css";
import {Row, Col}from "react-bootstrap";

class TopWeather extends Component{
    render() {
        const { icon,
            weather_description,
            humidity,
            feels_like,
            uvi,
            visibility,
            sunrise,
            sunset
        } = this.props.info.data.attributes.current

        return(
            <section className="top-weather top-weather-info">
                <Row>
                    <Col>
                        <img src={ icon } alt="weather icon"/>
                        <br/>
                        { weather_description }

                    </Col>
                    <Col>
                        <p><span>Humidity:</span>{ humidity }</p>
                        <p><span>Feels Like:</span>{ feels_like }</p>
                        <p><span>UVI:</span>{ uvi }</p>
                        <p><span>Visibility:</span>{ visibility }</p>

                    </Col>
                </Row>
                <Row>
                    <section className="top-weather-info__rise-set">
                        <div>
                            <p><span>Sunrise: </span>{ sunrise }</p>
                        </div>
                        <div>
                            <p><span>Sunset: </span>{ sunset }</p>
                        </div>
                    </section>
                </Row>
            </section>
        )
    }
}

export default TopWeather;