import React from "react";
import {Row, Col}from "react-bootstrap";

//import project components
import CoverBorder from "../../StyleComponents/CoverBorder/CoverBorder";

// import CSS
import "./TopWeather.scss";

const TopWeather = ({ info }) => {
    const { icon,
            weather_description,
            humidity,
            feels_like,
            uvi,
            visibility,
            sunrise,
            sunset
        } = info.data.attributes.current

    return(
        <CoverBorder>
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
        </CoverBorder>
    )
}

export default TopWeather;